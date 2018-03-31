import commands from '../store/commands'

export function processCommand(command) {
  if (commands[command]) {
    return commands[command]
  }

  return commands['404']
}
