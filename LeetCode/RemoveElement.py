# @param  A       a list of integers
# @param  elem    an integer, value need to be removed
# @return an integer
def removeElement(self, A, elem):
    i = 0
    times = A.count(elem)
    while i < times:
        A.remove(elem)
        i += 1

    return len(A)