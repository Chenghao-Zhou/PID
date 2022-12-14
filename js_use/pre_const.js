var block_num = 7;
var trial_num = 15;

const start_screen = {
    data: {
        screen_id: "start_screen"
    },
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Click on the Start button.',
    choices: ['Start']
}


const detect_no_sign = {
    timeline: [
        {
            type: jsPsychPsychophysics,
            stimuli: [
                {
                    obj_type: 'text',
                    startX: 'center',
                    startY: 'center',
                    content: '未检测到签名，请联系主试',
                    font: "32px 'Arial'",
                    text_color: 'white',
                    show_start_time: 0, // ms after the start of the trial
                },
            ]
        }
    ],
    conditional_function: () => {
        if (localStorage.subj_name == undefined) {
            return true;//display
        } else {
            return false;
        } // not display
    }
}

const fullscreen_trial = {
    data: {
        screen_id: "fullscreen_true"
    },
    type: jsPsychFullscreen,
    fullscreen_mode: true
}

const fullscreen_trial_exit = {
    type: jsPsychFullscreen,
    fullscreen_mode: false
}

const block_instruc_exam = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '指导语：心中估算白球到达目标处按空格键；点击开始进入演示模式',
    choices: ['开始']
}

const viz_trial = {
    data: {
        screen_id: "viz"
    },
    timeline: [
        {
            type: jsPsychPsychophysics,
            //pixi: pixi_flag,
            stimuli: [
                {
                    obj_type: 'circle',
                    startX: 1920 / 6, // location in the canvas 200
                    startY: 1080 / 2, //400
                    endX: 1920 / 6 * 2,
                    endY: 1080 / 2,
                    radius: 50,
                    line_color: 'black', // You can use the HTML color name instead of the HEX color.
                    fill_color: 'black',
                    show_start_time: 0, // ms after the start of the trial
                    show_end_time: 0 + 2000, // fast = 500; slow = 2000
                    motion_start_time: 0,
                    motion_end_time: 0 + 2000,
                },
                {
                    obj_type: 'line',
                    x1: 1920 / 6 * 2,
                    y1: 1080 / 2 + 200,
                    x2: 1920 / 6 * 2,
                    y2: 1080 / 2 - 200,
                    line_color: 'green', // Change the coordinate origin to the center of the window}，
                    show_start_time: 0, // ms after the start of the trial
                },
                {
                    obj_type: 'text',
                    startX: 1920 / 6,
                    startY: 1080 / 2 - 100,
                    content: '匀速运动',
                    font: "26px 'Arial'",
                    text_color: 'white',
                    endX: 1920 / 6 * 2,
                    endY: 1080 / 2 - 100,
                    show_start_time: 0, // ms after the start of the trial
                    show_end_time: 0 + 2000, // fast = 500; slow = 2000
                    motion_start_time: 0,
                    motion_end_time: 0 + 2000,
                },
                {
                    obj_type: 'text',
                    startX: 1920 / 6 * 2,
                    startY: 1080 / 2 - 100,
                    content: '隐身',
                    font: "26px 'Arial'",
                    text_color: 'white',
                    endX: 1920 / 6 * 4,
                    endY: 1080 / 2 - 100,
                    show_start_time: 0 + 2000, // ms after the start of the trial
                    show_end_time: 0 + 2000 + 2000 * (4 - 2), // fast = 500; slow = 2000
                    motion_start_time: 0 + 2000,
                    motion_end_time: 0 + 2000 + 2000 * (4 - 2),
                },
                {
                    obj_type: 'text',
                    startX: 1920 / 6 * 4,
                    startY: 1080 / 2 - 100,
                    content: '到达目标',
                    font: "26px 'Arial'",
                    text_color: 'white',
                    show_start_time: 0 + 2000 + 2000 * (4 - 2), // ms after the start of the trial
                },
                {
                    obj_type: 'circle',
                    startX: 1920 / 6 * 4,
                    startY: 1080 / 2,
                    radius: 50,
                    line_color: 'black', // You can use the HTML color name instead of the HEX color.
                    fill_color: 'black',
                    show_start_time: 0, // ms after the start of the trial
                },
                {
                    obj_type: 'text',
                    startX: 1920 / 6 * 4,
                    startY: 1080 / 2 - 100,
                    content: '目标',
                    font: "26px 'Arial'",
                    text_color: 'white',
                    show_start_time: 0, // ms after the start of the trial
                    show_end_time: 0 + 2000 + 2000 * (4 - 2), // ms after the start of the trial
                },
                {
                    obj_type: 'text',
                    startX: 'center',
                    startY: 1080 / 4,
                    content: '白球到达目标处按空格键',
                    font: "26px 'Arial'",
                    text_color: 'white',
                    show_start_time: 0 + 0, // ms after the start of the trial
                    response_ends_trial: 'true',
                    response_type: 'key',
                    choices: ['Space'],
                },
            ],


        }
    ],
}

const block_instruc_formal = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '指导语：心中估算白球到达目标处按空格键；点击开始进入正式实验',
    choices: ['开始']
}

const block_relax = {
    data: {
        screen_id: "block_relax"
    },
    type: jsPsychPsychophysics,
    stimuli: [
        {
            obj_type: 'text',
            startX: 'center',
            startY: 'center',
            content: '休息；摁空格键继续',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['space'],
        }
    ]
}

const EXP_end = {
    timeline: [
        {
            type: jsPsychPsychophysics,
            stimuli: [
                {
                    obj_type: 'text',
                    startX: 'center',
                    startY: 'center',
                    content: '试验结束，感谢您的参与！！！',
                    font: "32px 'Arial'",
                    text_color: 'white',
                    show_start_time: 0, // ms after the start of the trial
                },
            ]
        }
    ]
}


///*****///
///Condition 1///
///Speed
///Target
///*****///
const exp_formal_intro_1 = {
    data: {
        screen_id: "intro",
        condition: 1
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2 - 100, //400
            content: '开始位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
        {
            obj_type: 'text',
            startX: 'center',
            startY: 1080 / 2 + 250,
            content: '记住开始与目标位置后摁空格键开始',
            font: "35px 'Arial'",
            text_color: 'white',
        },

        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            show_start_time: 0, // ms after the start of the trial
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['Space'],
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 2,
            startY: 1080 / 4,
            content: '过线后隐藏',
            font: "26px 'Arial'",
            text_color: 'white',
        },

        {
            obj_type: 'circle',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2 - 100,
            content: '目标位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
    ]
}

const exp_formal_1 = {
    data: {
        screen_id: "formal",
        condition: 1
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            endX: 1920 / 6 * 2,
            endY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 500, // ms after the start of the trial
            show_end_time: 500 + 2000, // fast = 500; slow = 2000
            motion_start_time: 500,
            motion_end_time: 500 + 2000,

        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            response_start_time: 500 + 2000,
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['space'],
        },
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },

    ],
    on_finish: function (data) {
        if (data.rt < 500 + 2000 + 2000 * (4 - 2) + 100 & data.rt > 500 + 2000 + 2000 * (4 - 2) - 100) {
            data.accuracy = 1;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt > 500 + 2000 + 2000 * (4 - 2)) {
            data.accuracy = 0;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt < 500 + 2000 + 2000 * (4 - 2) - 100) {
            data.accuracy = 2;
            console.log(data.accuracy)
            console.log(data.rt)
        }
    }
}

const feedback_1 = {
    data: {
        screen_id: "feedback",
        condition: 1
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2 - 100,
            content: '目标',
            font: "26px 'Arial'",
            text_color: 'white',
        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
        },
        //jsPsych.data.getLastTrialData().trials[0].rt
        {
            obj_type: 'circle',
            startX: function (new_location) {

                var new_location = ((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000)
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000))
                return new_location
            },
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: function (new_location_2) {
                var new_location_2 = ((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000);
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000))
                return new_location_2
            },
            startY: 1080 / 2 - 100,
            content: '球运动位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
    ]


}

var repetition_count = 0;

const procedure_1 = {
    timeline: [exp_formal_1, feedback_1],
    repetitions: trial_num,
    on_timeline_start: function () {
        repetition_count++;
        console.log('Repetition number ', repetition_count, ' has just started.');
    },
    on_timeline_finish: function () {
        console.log('Repetition number ', repetition_count, ' has just finished.')
    }
}





const Condition_1 = {
    timeline: [exp_formal_intro_1, procedure_1]
}


///*****///
///Condition 2///
///Speed
///Target
///*****///
const exp_formal_intro_2 = {
    data: {
        screen_id: "intro",
        condition: 2
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2 - 100, //400
            content: '开始位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
        {
            obj_type: 'text',
            startX: 'center',
            startY: 1080 / 2 + 250,
            content: '记住开始与目标位置后摁空格键开始',
            font: "35px 'Arial'",
            text_color: 'white',
        },

        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            show_start_time: 0, // ms after the start of the trial
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['Space'],
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 2,
            startY: 1080 / 4,
            content: '过线后隐藏',
            font: "26px 'Arial'",
            text_color: 'white',
        },

        {
            obj_type: 'circle',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 0, // ms after the start of the trial
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2 - 100,
            content: '目标位置',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },
    ]
}

const exp_formal_2 = {
    data: {
        screen_id: "formal_2",
        condition: 2
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            endX: 1920 / 6 * 2,
            endY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 500, // ms after the start of the trial
            show_end_time: 500 + 2000, // fast = 500; slow = 2000
            motion_start_time: 500,
            motion_end_time: 500 + 2000,

        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            response_start_time: 500 + 2000,
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['space'],
        },
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },

    ],
    on_finish: function (data) {
        if (data.rt < 500 + 2000 + 2000 * (5 - 2) + 100 & data.rt > 500 + 2000 + 2000 * (5 - 2) - 100) {
            data.accuracy = 1;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt > 500 + 2000 + 2000 * (5 - 2)) {
            data.accuracy = 0;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt < 500 + 2000 + 2000 * (5 - 2) - 100) {
            data.accuracy = 2;
            console.log(data.accuracy)
            console.log(data.rt)
        }
    }
}

const feedback_2 = {
    data: {
        screen_id: "feedback",
        condition: 2
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2 - 100,
            content: '目标',
            font: "26px 'Arial'",
            text_color: 'white',
        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
        },
        //jsPsych.data.getLastTrialData().trials[0].rt
        {
            obj_type: 'circle',
            startX: function (new_location) {

                var new_location = ((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000)
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000))
                return new_location
            },
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: function (new_location_2) {
                var new_location_2 = ((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000);
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 2000) * (jsPsych.data.get().last(1).values()[0].rt + 2000))
                return new_location_2
            },
            startY: 1080 / 2 - 100,
            content: '球运动位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
    ]


}

var repetition_count = 0;

const procedure_2 = {
    timeline: [exp_formal_2, feedback_2],
    repetitions: trial_num,
    on_timeline_start: function () {
        repetition_count++;
        console.log('Repetition number ', repetition_count, ' has just started.');
    },
    on_timeline_finish: function () {
        console.log('Repetition number ', repetition_count, ' has just finished.')
    }
}





const Condition_2 = {
    timeline: [exp_formal_intro_2, procedure_2]
}

///*****///
///Condition 3///
///Speed
///Target
///*****///
const exp_formal_intro_3 = {
    data: {
        screen_id: "intro",
        condition: 3
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 0, // ms after the start of the trial
        },
        {
            obj_type: 'text',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2 - 100, //400
            content: '开始位置',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },
        {
            obj_type: 'text',
            startX: 'center',
            startY: 1080 / 2 + 250,
            content: '记住开始与目标位置后摁空格键开始',
            font: "35px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },

        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            show_start_time: 0, // ms after the start of the trial
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['Space'],
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 2,
            startY: 1080 / 4,
            content: '过线后隐藏',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },

        {
            obj_type: 'circle',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 0, // ms after the start of the trial
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2 - 100,
            content: '目标位置',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },
    ]
}

const exp_formal_3 = {
    data: {
        screen_id: "formal",
        condition: 3
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            endX: 1920 / 6 * 2,
            endY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 500, // ms after the start of the trial
            show_end_time: 500 + 500, // fast = 500; slow = 2000
            motion_start_time: 500,
            motion_end_time: 500 + 500,

        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            response_start_time: 500 + 500,
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['space'],
        },
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },

    ],
    on_finish: function (data) {
        if (data.rt < 500 + 500 + 500 * (4 - 2) + 50 & data.rt > 500 + 500 + 500 * (4 - 2) - 50) {
            data.accuracy = 1;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt > 500 + 500 + 500 * (4 - 2) + 50) {
            data.accuracy = 0;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt < 500 + 500 + 500 * (4 - 2) - 50) {
            data.accuracy = 2;
            console.log(data.accuracy)
            console.log(data.rt)
        }
    }
}

const feedback_3 = {
    data: {
        screen_id: "feedback",
        condition: 3
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 4,
            startY: 1080 / 2 - 100,
            content: '目标',
            font: "26px 'Arial'",
            text_color: 'white',
        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
        },
        //jsPsych.data.getLastTrialData().trials[0].rt
        {
            obj_type: 'circle',
            startX: function (new_location) {

                var new_location = ((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500)
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500))
                return new_location
            },
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: function (new_location_2) {
                var new_location_2 = ((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500);
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500))
                return new_location_2
            },
            startY: 1080 / 2 - 100,
            content: '球运动位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
    ]


}

var repetition_count = 0;

const procedure_3 = {
    timeline: [exp_formal_3, feedback_3],
    repetitions: trial_num,
    on_timeline_start: function () {
        repetition_count++;
        console.log('Repetition number ', repetition_count, ' has just started.');
    },
    on_timeline_finish: function () {
        console.log('Repetition number ', repetition_count, ' has just finished.')
    }
}





const Condition_3 = {
    timeline: [exp_formal_intro_3, procedure_3]
}

///*****///
///Condition 4///
///Speed
///Target
///*****///
const exp_formal_intro_4 = {
    data: {
        screen_id: "intro",
        condition: 4
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2 - 100, //400
            content: '开始位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
        {
            obj_type: 'text',
            startX: 'center',
            startY: 1080 / 2 + 250,
            content: '记住开始与目标位置后摁空格键开始',
            font: "35px 'Arial'",
            text_color: 'white',
        },

        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            show_start_time: 0, // ms after the start of the trial
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['Space'],
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 2,
            startY: 1080 / 4,
            content: '过线后隐藏',
            font: "26px 'Arial'",
            text_color: 'white',
        },

        {
            obj_type: 'circle',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 0, // ms after the start of the trial
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2 - 100,
            content: '目标位置',
            font: "26px 'Arial'",
            text_color: 'white',
        },
    ]
}

const exp_formal_4 = {
    data: {
        screen_id: "formal",
        condition: 4
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6, // location in the canvas 200
            startY: 1080 / 2, //400
            endX: 1920 / 6 * 2,
            endY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
            show_start_time: 500, // ms after the start of the trial
            show_end_time: 500 + 500, // fast = 500; slow = 2000
            motion_start_time: 500,
            motion_end_time: 500 + 500,

        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
            response_start_time: 500 + 500,
            response_ends_trial: 'true',
            response_type: 'key',
            choices: ['space'],
        },
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },

    ],
    on_finish: function (data) {
        if (data.rt < 500 + 2000 + 2000 * (4 - 2) + 100 & data.rt > 500 + 2000 + 2000 * (4 - 2) - 100) {
            data.accuracy = 1;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt > 500 + 2000 + 2000 * (4 - 2)) {
            data.accuracy = 0;
            console.log(data.accuracy)
            console.log(data.rt)
        } else if (data.rt < 500 + 2000 + 2000 * (4 - 2) - 100) {
            data.accuracy = 2;
            console.log(data.accuracy)
            console.log(data.rt)
        }
    }
}

const feedback_4 = {
    data: {
        screen_id: "feedback",
        condition: 4
    },
    type: jsPsychPsychophysics,
    //pixi: pixi_flag,
    stimuli: [
        {
            obj_type: 'circle',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: 1920 / 6 * 5,
            startY: 1080 / 2 - 100,
            content: '目标',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },
        {
            obj_type: 'line',
            x1: 1920 / 6 * 2,
            y1: 1080 / 2 + 200,
            x2: 1920 / 6 * 2,
            y2: 1080 / 2 - 200,
            line_color: 'green', // Change the coordinate origin to the center of the window
        },
        //jsPsych.data.getLastTrialData().trials[0].rt
        {
            obj_type: 'circle',
            startX: function (new_location) {

                var new_location = ((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500)
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500))
                return new_location
            },
            startY: 1080 / 2,
            radius: 50,
            line_color: 'black', // You can use the HTML color name instead of the HEX color.
            fill_color: 'black',
        },
        {
            obj_type: 'text',
            startX: function (new_location_2) {
                var new_location_2 = ((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500);
                console.log(jsPsych.data.get().last(1).values()[0].rt)
                console.log(((1920 / 6) / 500) * (jsPsych.data.get().last(1).values()[0].rt + 500))
                return new_location_2
            },
            startY: 1080 / 2 - 100,
            content: '球运动位置',
            font: "26px 'Arial'",
            text_color: 'white',
            show_start_time: 0, // ms after the start of the trial
        },
    ]


}

var repetition_count = 0;

const procedure_4 = {
    timeline: [exp_formal_4, feedback_4],
    repetitions: trial_num,
    on_timeline_start: function () {
        repetition_count++;
        console.log('Repetition number ', repetition_count, ' has just started.');
    },
    on_timeline_finish: function () {
        console.log('Repetition number ', repetition_count, ' has just finished.')
    }
}
const Condition_4 = {
    timeline: [exp_formal_intro_4, procedure_4]
}
