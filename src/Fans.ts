import {Gpio} from "onoff";

export default class Fans {

    /**
     * Fan power output.
     */
    protected power = new Gpio(2, 'out');

    /**
     * Disable power to fan.
     */
    async off() {
        await this.power.write(0);
    }

    /**
     * Turn on power to the fan.
     */
    async on() {
        await this.power.write(1)
    }

}