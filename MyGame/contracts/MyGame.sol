pragma solidity ^0.4.4;

contract IScoreStore {
    function GetScore(string name) returns (int);
}

contract MyGame { 
    function ShowScore(string name) returns (int)
    {
        IScoreStore scoreStore = IScoreStore(0xc5de44baac33a9ba78d40541716d5c868fbd9cc2);

        return scoreStore.GetScore(name);
    }
}