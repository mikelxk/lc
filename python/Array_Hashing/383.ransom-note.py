from collections import Counter
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        noteCounter = Counter(ransomNote)
        magazineCounter = Counter(magazine)
        for k,v in noteCounter.items():
            if magazineCounter[k]< v:
                return False
        return True

