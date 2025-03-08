export interface Qust {
    questionText: string;
    questionOptions: {
        answerText: string;
        isCorrect: boolean;
    }[];
}

export const questions: Qust[] = [
    {
        questionText: " What is the default visibility of a function in Solidity if no visibility specifier is provided?",
        questionOptions: [
            { answerText: "public", isCorrect: false },
            { answerText: "private", isCorrect: false },
            { answerText: "external", isCorrect: false },
            { answerText: "internal", isCorrect: true },
        ]
    },
    {
        questionText: "Which function modifier in Solidity ensures a function can only be executed once?",
        questionOptions: [
            { answerText: "onlyOwner", isCorrect: false },
            { answerText: "nonReentrant", isCorrect: true },
            { answerText: "payable", isCorrect: false },
            { answerText: "pure", isCorrect: false },
        ]
    },
    {
        questionText: " What is the keyword used to make a function unable to modify the state?",
        questionOptions: [
            { answerText: "view", isCorrect: false },
            { answerText: "pure", isCorrect: true },
            { answerText: "payable", isCorrect: false },
            { answerText: "constant", isCorrect: false },
        ]
    },
    {
        questionText: " Which of the following data types in Solidity consumes the least gas?",
        questionOptions: [
            { answerText: "uint256", isCorrect: false },
            { answerText: "uint8", isCorrect: true },
            { answerText: "bool", isCorrect: false },
            { answerText: "address", isCorrect: false },
        ]
    },
    {
        questionText: "What does msg.sender represent in a Solidity smart contract?",
        questionOptions: [
            { answerText: "The address of the contract", isCorrect: false },
            { answerText: "The Ethereum network gas price", isCorrect: false },
            { answerText: "The address of the caller who invoked the function", isCorrect: true },
            { answerText: "The gas limit set for the transaction", isCorrect: false },
        ]
    },
    {
        questionText: "What is the purpose of selfdestruct in Solidity?",
        questionOptions: [
            { answerText: "To stop contract execution temporarily", isCorrect: false },
            { answerText: "To permanently remove the contract and send its balance to an address", isCorrect: true },
            { answerText: "To reset all contract variables to their initial state", isCorrect: false },
            { answerText: "To disable function execution for a specific user", isCorrect: false },
        ]
    },
    {
        questionText: "Which of the following statements about require, assert, and revert is TRUE?",
        questionOptions: [
            { answerText: "require is used for internal errors and consumes all remaining gas", isCorrect: false },
            { answerText: "assert should be used for validating user input", isCorrect: false },
            { answerText: "revert allows for custom error messages and state reversion", isCorrect: true },
            { answerText: "require does not check conditions in Solidity", isCorrect: false },
        ]
    },
    {
        questionText: "What is the purpose of the mapping data structure in Solidity?",
        questionOptions: [
            { answerText: "To create an array of elements", isCorrect: false },
            { answerText: "To store key-value pairs for efficient lookup", isCorrect: true },
            { answerText: "To store fixed-size lists", isCorrect: false },
            { answerText: "To handle floating-point numbers", isCorrect: false },
        ]
    },
    {
        questionText: "Which of the following statements about delegatecall is TRUE?",
        questionOptions: [
            { answerText: "delegatecall executes a function in another contract but preserves the caller’s storage context", isCorrect: true },
            { answerText: "delegatecall always reverts on failure", isCorrect: false },
            { answerText: "delegatecall sends ETH along with function execution", isCorrect: false },
            { answerText: "delegatecall does not execute the function in the caller's context", isCorrect: false },
        ]
    },
    {
        questionText: " What does payable in Solidity allow a function to do?",
        questionOptions: [
            { answerText: "Modify state variables", isCorrect: false },
            { answerText: "Receive Ether", isCorrect: true },
            { answerText: "Be executed only by the contract owner", isCorrect: false },
            { answerText: "Be called only from external contracts", isCorrect: false },
        ]
    }
]