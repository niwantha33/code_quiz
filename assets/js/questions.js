//  set all questions 
export const get_questions = function () {
    //  set keys(name) values, also safe to export to another module 
    let questions = new Map();
    // all type of questions 
    let question_1 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_2 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_3 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_4 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_5 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_6 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_7 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_8 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_9 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
    };

    let question_10 = {
        qn: "a",
        choices:[
            'b',
            'c',
            'd',
            'e'
        ],
        ans: function () { return this.choices[2] }
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


