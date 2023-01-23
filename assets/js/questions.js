//  set all questions 
export const get_questions = function () {
    //  set keys(name) values, also safe to export to another module 
    let questions = new Map();
    // all type of questions 
    let question_1 = {
        qn: "How do you create a hyperlink in HTML?",
        choices:[
            '<a>www.google.com</a>',
            '<link>www.google.com</link>',
            '<a href="www.google.com">Google</a>',
            '<link href="www.google.com">Google</link>'
        ],
        ans: '<a href="www.google.com">Google</a>'
    };

    let question_2 = {
        qn: "How do you change the background color of a webpage using CSS?",
        choices:[
            '<body style="background-color: blue;">',
            '<body bgcolor="blue">',
            'body { background-color: blue; }',
            '<style> body { background-color: blue; } </style>'
        ],
        ans:'body { background-color: blue; }'
    };

    let question_3 = {
        qn: "How do you use JavaScript to create a pop-up alert message?",
        choices:[
            'alert("Hello World!");',
            'msg("Hello World!");',
            '<script> alert("Hello World!"); </script>',
            '<alert> "Hello World!" </alert>'
        ],
        ans: 'alert("Hello World!");'
    };

    let question_4 = {
        qn: "How do you create an image in HTML?",
        choices:[
            '<img src="image.jpg">',
            '<picture>image.jpg</picture>',
            '<img href="image.jpg">',
            '<image src="image.jpg">'
        ],
        ans: 'b<img src="image.jpg">'
    };

    let question_5 = {
        qn: "How do you change the text color using CSS?",
        choices:[
            'color: "red";',
            'text-color: "red";',
            '<span style="color: red;">',
            'color: red;'
        ],
        ans: 'color: red;'
    };

    let question_6 = {
        qn: "How do you use JavaScript to check if a checkbox is checked?",
        choices:[
            'document.getElementById("checkbox").checked;',
            'document.getElementById("checkbox").select;',
            'document.getElementById("checkbox").value;',
            'document.getElementById("checkbox").isChecked;'
        ],
        ans: 'document.getElementById("checkbox").checked;'
    };

    let question_7 = {
        qn: "How do you use JavaScript to create a timer?",
        choices:[
            'setTimeout(myFunction, 3000);',
            'setInterval(myFunction, 3000);',
            'setDuration(myFunction, 3000);',
            'setClock(myFunction, 3000);'
        ],
        ans: 'setTimeout(myFunction, 3000);'
    };

    let question_8 = {
        qn: "How do you use JavaScript to change the content of a div?",
        choices:[
            'document.getElementById("div").textContent = "new content";',
            'document.getElementById("div").content = "new content";',
            'document.getElementById("div").value = "new content";',
            'document.getElementById("div").text = "new content";'
        ],
        ans: 'document.getElementById("div").textContent = "new content";'
    };

    let question_9 = {
        qn: "How do you use JavaScript to toggle a class on click?",
        choices:[
            'element.classList.toggle("classname");',
            'element.addClass("classname");',
            'element.replaceClass("classname");',
            'element.removeClass("classname");'
        ],
        ans: 'element.classList.toggle("classname");'
    };

    let question_10 = {
        qn: "How do you use JavaScript to submit a form?",
        choices:[
            'document.getElementById("form").submit();',
            'document.getElementById("form").send();',
            'document.getElementById("form").post();',
            'document.getElementById("form").sendForm();'
        ],
        ans: 'document.getElementById("form").submit();'
    };

    // create Array objects using Array class to store question data 
    let type_of_questions = Object.create(Array(
        question_1,
        question_2,
        question_3,
        question_4,
        question_5,
        question_6,
        question_7,
        question_8,
        question_9,
        question_10,
    ));

    type_of_questions.forEach(
         (value, index)=>{
            questions.set(index, value)
        }
    )
        
    return questions
}


