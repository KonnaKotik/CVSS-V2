<html xmlns="http://www.w3.org/1999/html">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</head>
<body>
<div class="col-sm-12 col-lg-12">

    <h5 id="cvss_vector"></h5>
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <input type="submit" onclick="show(document.getElementById('base'))" title="Базовые метрики"
                           value="Базовые метрики">
                </h4>
            </div>
            <div id="base" style="display: none;" class="panel-collapse collapse in">
                <form class="panel-body">

                    <div>
                        <strong>Внимание!</strong> Для получения результата необходимо выбрать значение каждого
                        критерия!
                    </div>
                    <div>
                        <strong>Базовая оценка :</strong> <strong id="base_result"></strong>
                    </div>

                    <div class="row" name="base">
                        <div class="col-lg-6">
                            <div class="col-lg-12">
                                <h4>Способ получения доступа (AV):</h4>
                                <form class="btn-group btn-group-justified" id="av">
                                    <input type="radio" class="radio" value="L" name="av"/>Локальный (L)
                                    <input type="radio" class="radio" value="A" name="av"/>Смежная сеть
                                    (A)
                                    <input type="radio" class="radio" value="N" name="av"/>Сетевой (N)
                                </form>
                            </div>
                            <div class="col-lg-12">
                                <h4>Сложность получения доступа (AC):</h4>
                                <form class="btn-group btn-group-justified" id="ac">
                                    <input type="radio" class="radio" data-bs-group="AC"
                                           value="H" name="ac"/>Высокая (H)
                                    <input type="radio" class="radio" data-bs-group="AC"
                                           value="M" name="ac"/>Средняя (M)
                                    <input type="radio" class="radio" data-bs-group="AC"
                                           value="L" name="ac"/>Низкая (L)
                                </form>
                            </div>
                            <div class="col-lg-12">
                                <h4>Аутентификация (Au):</h4>
                                <form class="btn-group btn-group-justified" id="au">
                                    <input type="radio" role="button" class="radio" data-bs-group="Au"
                                           value="M" name="au"/>Множественная (M)
                                    <input type="radio" role="button" class="radio" data-bs-group="Au"
                                           value="S" name="au"/>Единственная (S)
                                    <input type="radio" role="button" class="radio" data-bs-group="Au"
                                           value="N" name="au"/>Не требуется (N)
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="col-lg-12">
                                <h4>Влияние на конфиденциальность (С):</h4>
                                <form class="btn-group btn-group-justified" id="c">
                                    <input type="radio" role="button" class="radio" data-bs-group="C"
                                           value="N" name="c">Не оказывает (N)
                                    <input type="radio" role="button" class="radio" data-bs-group="C"
                                           value="P" name="c">Частичное (P)
                                    <input type="radio" role="button" class="radio" data-bs-group="C"
                                           value="C" name="c">Полное (C)
                                </form>
                            </div>
                            <div class="col-lg-12">
                                <h4>Влияние на целостность (I):</h4>
                                <form class="btn-group btn-group-justified" id="i">
                                    <input type="radio" role="button" class="radio" data-bs-group="I" value="N"
                                           name="i"/>Не
                                    оказывает (N)
                                    <input type="radio" role="button" class="radio" data-bs-group="I" value="P"
                                           name="i"/>Частичное
                                    (P)
                                    <input type="radio" role="button" class="radio" data-bs-group="I" value="C"
                                           name="i"/>Полное
                                    (C)
                                </form>
                            </div>
                            <div class="col-lg-12">
                                <h4>Влияние на доступность (A):</h4>
                                <form class=-group-jradio" id="a">
                                    <input type="radio" role="button" class="radio" data-bs-group="A" value="N"
                                           name="a"/>Не
                                    оказывает (N)
                                    <input type="radio" role="button" class="radio" data-bs-group="A" value="P"
                                           name="a"/>Частичное
                                    (P)
                                    <input type="radio" role="button" class="radio" data-bs-group="A" value="C"
                                           name="a"/>Полное
                                    (C)
                                </form>
                            </div>
                        </div>
                    </div>
                    <button class="button-add" onclick="calculate(event)">Calculate</button>
                </form>
            </div>
        </div>
    </div>

</div>

<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
            <input type="submit" onclick="show(document.getElementById('time'))" value="Временные метрики">
        </h4>
    </div>
    <div id="time" style="display: none;" class="panel-collapse collapse in" aria-expanded="true">
        <form class="panel-body">
            <div>
                <strong>Внимание!</strong> Для получения результата необходимо выбрать значение каждого критерия,
                а также рассчитать базовую метрику!
            </div>
            <div>
                <strong>Временная оценка :</strong> <strong id="time_result"></strong>
            </div>

            <div class="col-lg-12">
                <h4>Возможость использования (E):</h4>
                <form class="btn-group btn-group-justified" id="e">
                    <input type="radio" role="button" class="btn btn-default btn-danger" data-ts-group="E" name="e"
                           value="ND">Не
                    определено (ND)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="E" name="e" value="U">Теоретически
                    (U)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="E" name="e" value="POC">Есть
                    концепция (POC)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="E" name="e" value="F">Есть
                    сценарий (F)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="E" name="e" value="H">Высокая
                    (H)
                </form>
            </div>
            <div class="col-lg-12">
                <h4>Уровень исправления (RL):</h4>
                <form class="btn-group btn-group-justified" id="rl">
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RL" name="rl" value="ND">Не
                    определено (ND)
                    <input type="radio" role="button" class="btn btn-default btn-success" data-ts-group="RL" name="rl"
                           value="OF">Официальное
                    (OF)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RL" name="rl" value="T">Временное
                    (T)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RL" name="rl" value="W">Рекомендации
                    (W)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RL" name="rl" value="U">Недоступно
                    (U)
                </form>
            </div>
            <div class="col-lg-12">
                <h4>Степень достоверности источника (RC):</h4>
                <form class="btn-group btn-group-justified" id="rc">
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RC" name="rc" value="ND">Не
                    определено (ND)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RC" name="rc" value="UC">Не
                    подтверждена (UC)
                    <input type="radio" role="button" class="btn btn-default btn-warning" data-ts-group="RC" name="rc"
                           value="UR">Не
                    доказана (UR)
                    <input type="radio" role="button" class="btn btn-default" data-ts-group="RC" name="rc" value="C">Подтверждена
                    (C)
                </form>
            </div>
            <button class="button-add" onclick="calculateTime(event)">Calculate</button>
        </form>
    </div>
</div>

<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
            <input type="submit" onclick="show(document.getElementById('context'))" value="Контекстные метрики">
        </h4>
    </div>
    <div id="context" style="display: none;" class="panel-collapse collapse in" aria-expanded="true">
        <form class="panel-body">
            <div>
                <strong>Внимание!</strong> Для получения результата необходимо выбрать значение каждого критерия,
                а также выбрать критерии временной метрики и рассчитать базовую метрику
            </div>
            <div>
                <strong>Контекстная оценка :</strong> <strong id="context_result"></strong>
            </div>

            <div class="col-lg-12">
                <h4>Вероятность нанесения косвенного ущерба (CDP):</h4>
                <form class="btn-group btn-group-justified" name="cdp">
                    <input type="radio" value="ND" name="CDP">Не определено (ND)
                    <input type="radio" value="N" name="CDP">Отсутствует
                    (N)
                    <input type="radio" value="L" name="CDP">Низкая
                    (L)
                    <input type="radio" value="LM" name="CDP">Средняя
                    (LM)
                    <input type="radio" value="MH" name="CDP">Повышенная
                    (MH)
                    <input type="radio" value="H" name="CDP">Высокая
                    (H)
                </form>
            </div>

            <div class="col-lg-12">
                <h4>Плотность целей (TD):</h4>
                <form class="btn-group btn-group-justified" name="TD">
                    <input type="radio" name="TD" value="ND">Не определено (ND)
                    <input type="radio" name="TD" value="N">Отсутствует
                    (N)
                    <input type="radio" name="TD" value="L">Низкая (L)
                    <input type="radio" name="TD" value="M">Средняя
                    (M)
                    <input type="radio" name="TD" value="H">Высокая
                    (H)
                </form>
            </div>

            <div class="col-lg-12">
                <h4>Требования к конфиденциальности:</h4>
                <form class="btn-group btn-group-justified" id="CR">
                    <input type="radio" name="CR" value="ND">Не определено (ND)
                    <input type="radio" name="CR" value="L">Низкая (L)
                    <input type="radio" name="CR" value="M">Средняя (M)
                    <input type="radio" name="CR" value="H">Высокая (H)
                </form>
            </div>

            <div class="col-lg-12">
                <h4>Требования к целостности:</h4>
                <form class="btn-group btn-group-justified" id="IR">
                    <input type="radio" name="IR" value="ND">Не определено (ND)
                    <input type="radio" name="IR" value="L">Низкая (L)
                    <input type="radio" name="IR" value="M">Средняя
                    (M)
                    <input type="radio" name="IR" value="H">Высокая
                    (H)
                </form>
            </div>

            <div class="col-lg-12">
                <h4>Требования к доступности:</h4>
                <form class="btn-group btn-group-justified" id="AR">
                    <input type="radio" name="AR" value="ND">Не определено (ND)
                    <input type="radio" name="AR" value="L">Низкая (L)
                    <input type="radio" name="AR" value="M">Средняя (M)
                    <input type="radio" name="AR" value="H">Высокая (H)
                </form>
            </div>
            <button class="button-add" onclick="calculateContext(event)">Calculate</button>
        </form>
    </div>
</div>

<script>
    function show(div) {
        if (div.style.display === "none") {
            div.style.display = "block";
        } else
            div.style.display = "none"
    }
</script>
<script type="application/javascript" src="/js/base.js"></script>
</body>
</html>