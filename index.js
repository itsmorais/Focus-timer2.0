import { textMinutes, textSeconds } from './script/config.js'

import { Sounds } from './script/sounds.js'

import { Events } from './script/Events.js'
import { Timer } from './script/timer.js'

const sounds = Sounds()

const timer = Timer({ textMinutes, textSeconds, endTime: sounds.endTime })

const event = Events({ timer, sounds })
