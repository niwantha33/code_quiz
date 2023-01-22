//  set all questions 
const create_question_array = function () {
    //  set keys(name) values, also safe to export to another module 
    let questions = new Map();
    // all type of questions 
    let question_1 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_1 }
    }

    let question_2 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }

    let question_3 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    let question_4 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    let question_5 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    let question_6 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    let question_7 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    let question_8 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    let question_9 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }

    let question_10 = {
        qn: "a",
        ans_1: "b",
        ans_2: "c",
        ans_3: "d",
        ans_4: "e",
        correct_ans: function () { return this.ans_3 }
    }
    // create Array objects using Array class to store question data 
    let type_of_questions = new Array(
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
    )

    type_of_questions.forEach(
        function (value, index){
            questions.set(index, value)
        }
    )
}












let lift_of_questions = function (arr) {

    for (let i = 1; i < 11; i++) {
        questions.set(i, arr[i - 1])
    }
    return questions
}


export const get_questions = function () {
    return lift_of_questions(type_of_questions);
}
