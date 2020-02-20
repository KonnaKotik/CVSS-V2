package ru.itis.infosecurity.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.infosecurity.forms.BaseForm;
import ru.itis.infosecurity.forms.ContextForm;
import ru.itis.infosecurity.forms.TimeForm;
import ru.itis.infosecurity.service.CalculationService;

import java.math.BigDecimal;
import java.math.RoundingMode;

@RestController
public class AjaxController {
    private CalculationService service;

    @Autowired
    public AjaxController(CalculationService service) {
        this.service = service;
    }

    @PostMapping("/ajax/calculateBase")
    public ResponseEntity<Object> makeCalculations(BaseForm form) {
        double result = service.calculateBaseMetrix(form);
        result = new BigDecimal(result).setScale(1, RoundingMode.UP).doubleValue();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/ajax/calculateTime")
    public ResponseEntity<Object> makeCalculations(TimeForm form) {
        double result = service.calculateTimeMetrix(form);
        result = new BigDecimal(result).setScale(1, RoundingMode.UP).doubleValue();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/ajax/calculateContext")
    public ResponseEntity<Object> makeCalculations(ContextForm form) {
        double result = service.calculateContextMetrix(form);
        result = new BigDecimal(result).setScale(1, RoundingMode.UP).doubleValue();
        return ResponseEntity.ok(result);
    }
}
