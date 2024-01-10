/* eslint-disable func-names */
/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */

import * as utils from '../utils'

// monkey-patching   (is required sometimes but is rarely ideal. better not to mock because if another prop is added it still passes even though its broken)
import thumbWar from '../thumb-war'

describe('Thumbwar', () => {
  it('Should return the winner', () => {
    const originalGetWinner = utils.getWinner //saving the original winner to be user for other tests

    utils.getWinner = (p1, p2) => {
      return p1
    }

    // //other way of writing function
    // utils.getWinner = function (p1, p2) {
    //   //monkey patching to force p1 to be winner
    //   return p1
    // }
    const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
    expect(winner).toBe('Ken Wheeler')

    utils.getWinner = originalGetWinner // IMPORTANT! set the utils getwinnervalue back to the original(non-forced) winner.
  })
})
