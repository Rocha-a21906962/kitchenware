import {defaults, Line, Bar} from "react-chartjs-2";

defaults.global.defaultFontFamily = "Poppins";
defaults.global.defaultFontSize = 12;
defaults.global.defaultFontColor = '#ffffff';

export const Plot1 = () => {
    return <Line
        data={{
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'NOV'],
            datasets: [{
                label: '# of Money Spent',
                data: [420, 390, 330, 450, 470, 250, 220, 230, 500, 430, 220],
                // Como só têm uma cor, vai ficar default para todas as labels
                backgroundColor: ['transparent'],
                borderColor: [
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B',
                    '#FEBB0B'
                ],
                borderWidth: 3,
            }]
        }}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {display: false},
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#4c4c4c",
                bodyFontColor: "#4c4c4c",
                enabled: true,
                mode: 'single',
                multiKeyBackground: "#E1548F"
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(254, 187, 11, 0.1)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(254, 187, 11, 0.1)",
                    }
                }]

            }
        }}
    />
}
export const Plot2 = () => {
    return <Line
        data={{
            labels: ['MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'NOV'],
            datasets: [{
                label: '# of Votes',
                data: [42, 39, 33, 45, 47, 25, 20],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F',
                    '#E1548F'
                ],
                borderWidth: 3,
            }]
        }}
        options={{
            responsive: true,
            legend: {display: false},
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#4c4c4c",
                bodyFontColor: "#4c4c4c",
                enabled: true,
                mode: 'single'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(225, 84, 143, 0.1)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(225, 84, 143, 0.1)",
                    }
                }]

            }
        }}
    />
}
export const Plot3 = () => {
    return <Bar
        data={{
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            datasets: [{
                label: '# of Liters',
                data: [42, 39, 33, 45, 47, 25, 20],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0',
                    '#0098f0'
                ],
                borderWidth: 2,

            }]
        }}
        options={{
            responsive: true,
            legend: {display: false},
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#4c4c4c",
                bodyFontColor: "#4c4c4c",
                enabled: true,
                mode: 'single'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 152, 240, 0.1)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 152, 240, 0.1)",
                    }
                }]

            }
        }}
    />
}
export const Plot4 = () => {
    return <Line
        data={{
            labels: ['5/8', '6/9', '7/10', '8/11', '9/12', '10/1'],
            datasets: [{
                label: '# of Votes',
                data: [42, 39, 33, 45, 47, 25],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3',
                    '#00f2c3'
                ],
                borderWidth: 2,

            }]
        }}
        options={{
            responsive: true,
            legend: {display: false},
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "#fff",
                titleFontColor: "#4c4c4c",
                bodyFontColor: "#4c4c4c",
                enabled: true,
                mode: 'single'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 242,195, 0.1)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 242,195, 0.1)",
                    }
                }]

            }
        }}
    />
}