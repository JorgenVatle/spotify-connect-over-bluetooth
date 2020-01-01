import SystemInformation, {Systeminformation} from 'systeminformation'
import { EventEmitter } from "events";

class SystemStatus extends EventEmitter {

    /**
     * System Status constructor.
     */
    constructor() {
        super();
        this.start();
    }

    /**
     * Fetch and emit current system information.
     */
    protected async poll() {
        this.emit('cpu', await SystemInformation.cpu());
        this.emit('cpu.temperature', await SystemInformation.cpuTemperature());
    }

    /**
     * Start polling for system information.
     */
    protected start() {
        setInterval(() => this.poll(), 1000);
    }
}

declare interface SystemStatus {
    on(event: 'cpu', listener: (data: Systeminformation.CpuData) => void): this;
    on(event: 'cpu.temperature', listener: (data: Systeminformation.CpuTemperatureData) => void): this;
}

export default new SystemStatus();