import SystemStatus from "./SystemStatus";
import Fans from "./Fans";

export default new class FanController {

    /**
     * Start the fans once temperature hits the given value in celsius.
     */
    protected readonly startAt = 60;

    /**
     * Stop the fans once temperature hits the given celsius value.
     */
    protected readonly stopAt = 38;

    /**
     * Fan Controller constructor.
     */
    constructor() {
        this.start();
    }

    /**
     * Watch system information.
     */
    protected start() {
        SystemStatus.on('cpu.temperature', (data) => {
            this.handleTemperature(data.max);
        })
    }

    /**
     * Handle current system temperatures.
     */
    async handleTemperature(temp: number) {
        if (temp >= this.startAt) {
            await Fans.on();
        }

        if (temp <= this.stopAt) {
            await Fans.off();
        }
    }
}