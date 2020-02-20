package ru.itis.infosecurity.service;

import org.springframework.stereotype.Service;
import ru.itis.infosecurity.forms.BaseForm;
import ru.itis.infosecurity.forms.ContextForm;
import ru.itis.infosecurity.forms.TimeForm;

import java.util.Map;
import java.util.TreeMap;

@Service
public class CalculationService {

    private static Map<String, Double> params = new TreeMap<>();
    private static double baseScore;
    private static double fImpact;
    private static double exploitability;
    private static double temporalScore;
    private static double environmentalScore;

    public double calculateBaseMetrix(BaseForm form) {
        return calculateFunction(getHashMapBase(form));
    }

    private double calculateFunction(Map<String, Double> params) {
        double impact = 10.41 * (1 - ((1 - params.get("C")) * (1 - params.get("I")) * (1 - params.get("A"))));
        if (impact != 0) {
            fImpact = 1.176;
        } else {
            fImpact = 0.0;
        }
        exploitability = 20 * params.get("AV") * params.get("AC") * params.get("Au");
        baseScore = (((0.6 * impact) + (0.4 * exploitability) - 1.5) * fImpact);
        return baseScore;
    }

    public double calculateTimeMetrix(TimeForm timeForm) {
        addParamsForTime(timeForm);
        temporalScore = baseScore * params.get("E") * params.get("RL") * params.get("RC");
        return temporalScore;
    }

    public double calculateContextMetrix(ContextForm contextForm) {
        addParamsForContext(contextForm);
        double adjustedImpact = Math.min(10, 10.41 * (1 - (1 - params.get("C") * params.get("CR")) *
                (1 - params.get("I") * params.get("IR")) * (1 - params.get("A") * params.get("AR"))));
        double adjustedBaseScore = (((0.6 * adjustedImpact) + (0.4 * exploitability) - 1.5) * fImpact);
        double adjustedTemporal = adjustedBaseScore * params.get("E") * params.get("RL") * params.get("RC");
        environmentalScore = ((adjustedTemporal + (10 - adjustedTemporal) * params.get("CDP"))* params.get("TD"));
        return environmentalScore;
    }

    private Map<String, Double> getHashMapBase(BaseForm form) {
        getValues(params, form);
        return params;
    }

    private void getValues(Map<String, Double> params, BaseForm form) {
        String AV = form.getAV();
        switch (AV) {
            case "L":
                params.put("AV", 0.395);
                break;
            case "A":
                params.put("AV", 0.646);
                break;
            case "N":
                params.put("AV", 1.0);
                break;
        }
        String AC = form.getAC();
        switch (AC) {
            case "H":
                params.put("AC", 0.35);
                break;
            case "M":
                params.put("AC", 0.61);
                break;
            case "L":
                params.put("AC", 0.71);
                break;
        }
        String Au = form.getAu();
        switch (Au) {
            case "M":
                params.put("Au", 0.45);
                break;
            case "S":
                params.put("Au", 0.56);
                break;
            case "N":
                params.put("Au", 0.704);
                break;
        }
        String c = form.getC();
        switch (c) {
            case "N":
                params.put("C", 0.0);
                break;
            case "P":
                params.put("C", 0.275);
                break;
            case "C":
                params.put("C", 0.66);
                break;
        }
        String i = form.getI();
        switch (i) {
            case "N":
                params.put("I", 0.0);
                break;
            case "P":
                params.put("I", 0.275);
                break;
            case "C":
                params.put("I", 0.66);
                break;
        }
        String a = form.getA();
        switch (a) {
            case "N":
                params.put("A", 0.0);
                break;
            case "P":
                params.put("A", 0.275);
                break;
            case "C":
                params.put("A", 0.66);
                break;
        }

    }

    private void addParamsForTime(TimeForm timeForm) {
        String E = timeForm.getE();
        switch (E) {
            case "ND":
                params.put("E", 1.0);
                break;
            case "U":
                params.put("E", 0.85);
                break;
            case "POC":
                params.put("E", 0.9);
                break;
            case "F":
                params.put("E", 0.95);
                break;
            case "H":
                params.put("E", 1.0);
                break;
        }
        String RL = timeForm.getRL();
        switch (RL) {
            case "ND":
                params.put("RL", 1.0);
                break;
            case "OF":
                params.put("RL", 0.87);
                break;
            case "TF":
                params.put("RL", 0.9);
                break;
            case "W":
                params.put("RL", 0.95);
                break;
            case "U":
                params.put("RL", 1.0);
                break;
        }
        String RC = timeForm.getRC();
        switch (RC) {
            case "ND":
                params.put("RC", 1.0);
                break;
            case "UC":
                params.put("RC", 0.9);
                break;
            case "UR":
                params.put("RC", 0.95);
                break;
            case "C":
                params.put("RC", 1.0);
                break;
        }
    }

    private void addParamsForContext(ContextForm contextForm) {
        String CDP = contextForm.getCDP();
        switch (CDP) {
            case "ND":
                params.put("CDP", 0.0);
                break;
            case "N":
                params.put("CDP", 0.0);
                break;
            case "L":
                params.put("CDP", 0.1);
                break;
            case "LM":
                params.put("CDP", 0.3);
                break;
            case "MH":
                params.put("CDP", 0.4);
                break;
            case "H":
                params.put("CDP", 0.5);
                break;
        }
        String TD = contextForm.getTD();
        switch (TD) {
            case "ND":
                params.put("TD", 1.0);
                break;
            case "N":
                params.put("TD", 0.0);
                break;
            case "L":
                params.put("TD", 0.25);
                break;
            case "M":
                params.put("TD", 0.75);
                break;
            case "H":
                params.put("TD", 1.0);
                break;
        }
        String CR = contextForm.getCR();
        switch (CR) {
            case "ND":
                params.put("CR", 1.0);
                break;
            case "L":
                params.put("CR", 0.5);
                break;
            case "M":
                params.put("CR", 1.0);
                break;
            case "H":
                params.put("CR", 1.51);
                break;
        }
        String IR = contextForm.getIR();
        switch (IR) {
            case "ND":
                params.put("IR", 1.0);
                break;
            case "L":
                params.put("IR", 0.5);
                break;
            case "M":
                params.put("IR", 1.0);
                break;
            case "H":
                params.put("IR", 1.51);
                break;
        }
        String AR = contextForm.getAR();
        switch (AR) {
            case "ND":
                params.put("AR", 1.0);
                break;
            case "L":
                params.put("AR", 0.5);
                break;
            case "M":
                params.put("AR", 1.0);
                break;
            case "H":
                params.put("AR", 1.51);
                break;
        }
    }
}
