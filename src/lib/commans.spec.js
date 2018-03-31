import { processCommand } from './commands'
import commands from '../store/commands'

describe('commands', () => {
  test('Call not exist command', () => {
    expect(processCommand('adssadas')).toEqual(commands['404'])
  })

  test('Call help command', () => {
    expect(processCommand('help')).toEqual(commands.help)
  })
})
