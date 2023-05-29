const initialState = {
    projects: {
        "en": [{
            id: 1,
            name: "Timer",
            description: "Сountdown timer",
        }, {
            id: 2,
            name: "SPA",
            description: "Single page application with several pages",

        }, {
            id: 3,
            name: "SPA with Redux",
            description: "Single page application with form using Redux",
        }, {
            id: 4,
            name: "Landing page",
            description: "Landing page with adaptive design",
        }],
        "ua": [{
            id: 1,
            name: "Таймер",
            description: "Таймер зворотнього відліку",
        }, {
            id: 2,
            name: "SPA",
            description: "SPA з декількома сторінками",

        }, {
            id: 3,
            name: "SPA з Redux",
            description: "SPA з формою з використанням Redux",
        }, {
            id: 4,
            name: "Веб-сторінка",
            description: "Сторінка з адаптивним дизайном",
        }]
    }

}

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return initialState;
        }
    }
}

export default ProjectReducer;