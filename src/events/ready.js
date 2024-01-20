const { ActivityType, Presence } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        let activities = ['Berat ve Semih Gaymiş haberiniz olsun 🤫'], i = 0;

        setInterval(() => {
            const now = new Date();
            const utcPlus3Hour = new Date(now.getTime() + 3 * 60 * 60 * 1000); // UTC+3

            if (utcPlus3Hour.getHours() >= 22 || utcPlus3Hour.getHours() < 8) {
                // Akşam 22:00'den sabah 8:00'e kadar Rahatsız etmeyin durumu
                client.user.setPresence({
                    activity: { name: 'Rahatsız etmeyin', type: ActivityType.DND },
                    status: 'dnd',
                });
            } else {
                // Diğer zamanlarda Boşta durumu
                client.user.setPresence({
                    activity: { name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening },
                    status: 'idle',
                });
            }
        }, 22000);
    },
};
