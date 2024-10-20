// This script can be used to deploy the "Greetings" contract using ethers.js library.
// Please make sure to compile "./contracts/Ballot.sol" file before running this script.
// And use Right click -> "Run" from context menu of the file to run the script. Shortcut: Ctrl+Shift+S

import { deploy } from './ethers-lib'

(async () => {
  try {
    const result = await deploy('Greetings', [])
    console.log(`address: ${result.address}`)
  } catch (e) {
    console.log(e.message)
  }
})()