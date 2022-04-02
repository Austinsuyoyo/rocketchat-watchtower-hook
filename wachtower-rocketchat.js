class Script {
    process_incoming_request({ request }) {

        const message = request.content.message;
        const level = request.content.level;


        // level color ref: https://github.com/sirupsen/logrus
        // panic, fatal, error, warn, info, debug, trace
        // Least logging <-----------------> Most logging

        if (level == "panic") {
            var color = 'red'
        } else if (level == "fatal") {
            var color = 'red'
        } else if (level == "error") {
            var color = 'red'
        } else if (level == "warn") {
            var color = 'yellow'
        } else if (level == "info") {
            var color = 'blue'
        } else if (level == "debug") {
            var color = 'gray'
        } else if (level == "trace") {
            var color = 'gray'
        } else {
            return {
                error: {
                    success: false,
                    message: 'Unsupported level'
                }
            };
        }

        return {
            content: {
                alias: 'watchtower',
                avatar: 'https://containrrr.dev/watchtower/images/logo-450px.png',
                text: message,
                attachments: [
                    {
                        color: color,
                        collapsed: true,
                        title: 'Collapse click here',
                        fields:[
                            {
                                short: true,
                                title: 'Level',
                                value: level
                            }
                        ]
                    }
                ]
            }
        }

    }
}