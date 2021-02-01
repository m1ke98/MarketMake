// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Synth is ERC20 {
    constructor(uint256 initialSupply) public ERC20("SynthToken", "sTKN") {
        _mint(msg.sender, initialSupply);
    }
}