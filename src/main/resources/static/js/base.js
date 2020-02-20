function calculate(event) {
    var av = document.forms[0];
    var av_value = "";
    for (i = 0; i < av.length; i++) {
        if (av[i].checked) {
            av_value = av[i].value;
        }
    }

    var ac = document.forms[1];
    var ac_value = "";
    for (i = 0; i < ac.length; i++) {
        if (ac[i].checked) {
            ac_value = ac[i].value;
        }
    }

    var au = document.forms[2];
    var au_value = "";
    for (i = 0; i < au.length; i++) {
        if (au[i].checked) {
            au_value = au[i].value;
        }
    }

    var c = document.forms[3];
    var c_value = "";
    for (i = 0; i < ac.length; i++) {
        if (c[i].checked) {
            c_value = c[i].value;
        }
    }

    var i = document.forms[4];
    var i_value = "";
    for (b = 0; b < i.length; b++) {
        if (i[b].checked) {
            i_value = i[b].value;
        }
    }

    var a = document.forms[5];
    var a_value = "";
    for (i = 0; i < a.length; i++) {
        if (a[i].checked) {
            a_value = a[i].value;
        }
    }

    console.log(av_value + ac_value + au_value + c_value + i_value + a_value);

    $.ajax({
        url: "/ajax/calculateBase",
        type: "post",
        data: {
            "AV": av_value,
            "AC": ac_value,
            "Au": au_value,
            "C": c_value,
            "I": i_value,
            "A": a_value
        },
        success: function (data) {
            console.log(data);
            var result = document.getElementById("base_result");
            result.innerText = data;
        }
    })
}

function calculateTime(event) {
    var e = document.forms[6];
    var e_value = "";
    for (i = 0; i < e.length; i++) {
        if (e[i].checked) {
            e_value = e[i].value;
        }
    }

    var rl = document.forms[7];
    var rl_value = "";
    for (i = 0; i < rl.length; i++) {
        if (rl[i].checked) {
            rl_value = rl[i].value;
        }
    }

    var rc = document.forms[8];
    var rc_value = "";
    for (i = 0; i < rc.length; i++) {
        if (rc[i].checked) {
            rc_value = rc[i].value;
        }
    }

    console.log(e_value + rl_value + rc_value);

    $.ajax({
        url: "/ajax/calculateTime",
        type: "post",
        data: {
            "E": e_value,
            "RL": rl_value,
            "RC": rc_value
        },
        success: function (data) {
            console.log(data);
            var result = document.getElementById("time_result");
            result.innerText = data;
        }
    })
}

function calculateContext(event) {
    var cdp = document.forms[9];
    var cdp_value = "";
    for (i = 0; i < cdp.length; i++) {
        if (cdp[i].checked) {
            cdp_value = cdp[i].value;
        }
    }

    var td = document.forms[10];
    var td_value = "";
    for (i = 0; i < td.length; i++) {
        if (td[i].checked) {
            td_value = td[i].value;
        }
    }

    var cr = document.forms[11];
    var cr_value = "";
    for (i = 0; i < cr.length; i++) {
        if (cr[i].checked) {
            cr_value = cr[i].value;
        }
    }

    var ir = document.forms[12];
    var ir_value = "";
    for (i = 0; i < ir.length; i++) {
        if (ir[i].checked) {
            ir_value = ir[i].value;
        }
    }

    var ar = document.forms[13];
    var ar_value = "";
    for (i = 0; i < ar.length; i++) {
        if (ar[i].checked) {
            ar_value = ar[i].value;
        }
    }

    console.log(cdp_value + td_value + cr_value + ir_value + ar_value);

    $.ajax({
        url: "/ajax/calculateContext",
        type: "post",
        data: {
            "CDP": cdp_value,
            "TD": td_value,
            "CR": cr_value,
            "IR": ir_value,
            "AR": ar_value
        },
        success: function (data) {
            console.log(data);
            var result = document.getElementById("context_result");
            result.innerText = data;
        }
    });
}
