$(document).ready(function () {


    let countElement = 0;
    let emptyElement = 0;

    initCount();
    countProgress();

    function initCount() {

        $(".document-tab").each(function () {
            let id = $(this).attr('id');
            id = id.replace("tab-", "");
            let navigation = $("#navigation-" + id);
            navigation.find('.count')[0].innerText = $(this).find('li').length
        });

        countElement = $(".document-form").find("li").length;
    }

    $(".document-form-tabs .datepicker input").datepicker({
        language: "uz-cyrl",
        autoclose: true
    }).on("changeDate", function (e) {
        changeElement("datepicker", $(this));
    });

    $(".document-form-tabs input").on("keyup", function (e) {
        changeElement("input", $(this));
    });

    $(".document-form-tabs select").on("change", function (e) {
        changeElement("select", $(this));
    });

    $(".document-form-tabs input[type=radio]").on("change", function (e) {
        let question_id = $(this).data('question');
        let id = $(this).attr("id");
        id = id.replace("customRadio", "");
        changeQuestion("radio", id, question_id)
    });

    function changeQuestion(type, id, question_id) {
        let inputs = $("#question-" + question_id).find("input[type=radio]");
        let ids = [];
        inputs.each(function () {
            let id = $(this).attr("id");
            id = id.replace("customRadio", "");
            ids.push(id);
        })

        ids.map(e => {
            $(".structure-" + e).addClass("disabled").removeClass('active-block');
        })

        $(".structure-" + id).addClass("active-block").removeClass("disabled");

        questionElement();
    }

    function questionElement() {
        $(".document-form .document-questions:not(.element-disabled) input[type=radio]").each(function () {
            let id = $(this).attr("id").replace("customRadio", "");
            let ids = [];
            if ($(this).is(":checked")) {
                $(".element-parent-"+id).removeClass("element-disabled");
            } else {
                console.log(id);
                $(".element-parent-"+id).addClass("element-disabled");
            }
        });
    }

    function changeElement(type, e = null) {
        let label = e.attr("id");
        let id = label.replace("label-", "");

        if(type === "select"){
            $('.structure-'+id).text($("#"+label+" option:selected").text());
        }else {

            let inputValue = e.val();

            if (inputValue.length === 0) {
                inputValue = $("#form-group-" + id + " label").text();
            }

            $(".structure-" + id).text(inputValue);
        }

        countProgress();
    }

    $(".document-tab-body").on("focus", "input", function (e) {
        let input = $(this).attr("id");
        input = input.replace("label-", "");
        $(".structures").removeClass("active");
        $(".structure-" + input).addClass("active");
        $(".document-view-scroll").scrollTo(".structure-" + input, 800);
        let parentId = $(this).parents('.document-tab').attr('id');
        parentId = parentId.replace('tab-', '');

        $(".document-navigation a").removeClass('active');

        $('#navigation-' + parentId).addClass('active');

    });

    function countProgress() {

        emptyElement = 0;

        $(".document-form li:not(.element-disabled) input").each(function () {
            let inputValue = $(this).val();
            if (inputValue.length === 0) {
                emptyElement++;
            }
        });

        let percent = (100 * (countElement - emptyElement)) / countElement;

        $(".document-progress").css("width", percent + "%");

        if (percent === 100) {
            $(".document-view").addClass("document-view-active");
        } else {
            $(".document-view").removeClass("document-view-active");
        }
    }

    $(".document-download").on("click", function (e) {
        e.preventDefault();
        downloadDocument($(this).data("id"), $(this).data('format'));
    });

    function downloadDocument(id, format) {


        if (emptyElement > 0) {
            goEmptyElement();
        } else {

            let forms = [];
            let inputs = [];
            $(".document-form li:not(.element-disabled) input, .document-form li:not(.element-disabled) select").each(function () {
                let inputType = $(this).attr("type");
                let isSelect = $(this).data("select");



                let inputValue = $(this).val();

                if(isSelect){
                    inputValue = $(this).text();
                    console.log(inputValue)
                }

                let inputName = $(this).attr("id");

                if (inputType === 'radio') {
                    if ($(this).is(":checked")) {
                        inputValue = $(this).val();
                    } else {
                        inputValue = 'off';
                    }
                }

                inputName = inputName.replace("label-", "");
                inputName = inputName.replace("customRadio", "radio-");

                // console.log(inputName, inputValue);

                inputs = {
                    name: inputName,
                    value: inputValue
                };

                forms.push(inputs);

            });

            $.ajax({
                method: "post",
                url: "/uz/download",
                data: {fields: JSON.stringify(forms), id: id, format: format},
                dataType: "json",
            }).done(function (req) {
                let link = document.createElement('a');
                link.href = req.file;
                link.download = req.name;
                link.click();
            });

        }
    }

    function goEmptyElement() {
        let x = 0;
        $(".document-form input").each(function () {
            let inputValue = $(this).val();
            if (inputValue.length === 0 && x === 0) {
                $(this).focus();
                x++;
            }
        });
    }

});
$(window).scroll(function () {


}).scroll();