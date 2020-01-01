import SystemStatus from "./SystemStatus";
import Fans from "./Fans";

export default new class FanController {

    /**
     * Start the fans once temperature hits the given value in celsius.
     */
    protected readonly permittedTemperature = 55;

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
            console.log(JSON.stringify(data, null, 2));
            this.handleTemperature(data.max);
        })
    }

    /**
     * Handle current system temperatures.
     */
    async handleTemperature(temp: number) {
        if (temp >= this.permittedTemperature) {
            await Fans.on();
            return;
        }

        await Fans.off();
    }
}