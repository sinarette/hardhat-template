const { ethers } = require("hardhat");

const main = async () => {
    [ wallet ] = await ethers.getSigners();

    res = await wallet.sendTransaction({
        from: ethers.utils.getAddress('0x629711b300aB0C5a323D2e698776a90eEF2fC0Ec'),
        to: ethers.utils.getAddress('0x02f58969F53565F130AFf9dE07a926Ed4Fe0F849'),
        value: ethers.utils.parseEther('0.01'),
        data: "0x3b3a5522000000000000000000000000629711b300ab0c5a323d2e698776a90eef2fc0ec000000000000000000000000000000000000007e37be2022c0914b2680000000"
    });

    await res.wait();
    console.log(`Tx ${res.transactionHash} in block ${res.blockNumber}`)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});