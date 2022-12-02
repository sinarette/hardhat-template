const { ethers } = require("hardhat");

const abi = require("./sampleabi").abi;

const getSignature = async (/*wallet, Claimer, amount, deadline*/) => {
    hash = ethers.utils.solidityKeccak256([/*"address", "address", "address", "uint256", "uint256", "uint256"*/],
                                    [/*Claimer.address, hft, wallet.address, amount, deadline, nonce*/]);
    flatsig = await wallet.signMessage(hash);
    return ethers.utils.splitSignature(flatsig);
}

const main = async () => {
    [wallet] = await ethers.getSigners();
    const contract = new ethers.Contract(config.contractAddress, abi, wallet);

    //sig = await getSignature(wallet, Claimer, amount, deadline);

    res = await contract.function([/*amount, deadline*/]);
    await res.wait();
    console.log(`Tx ${res.transactionHash} in block ${res.blockNumber}`)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});