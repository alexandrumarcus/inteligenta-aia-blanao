from model import Item
from controller import Controller

Weights = []
Prices = []
TotalItems = []
Maxim = 0


def program(fileInput, fileOutput, iterations):
    with open(fileInput) as f:
        numberOfLines = 0
        items = []
        for line in f:
            line = line.split()
            if line:
                line = [int(i) for i in line]
                items.append(line)
                numberOfLines = numberOfLines + 1

    Maxim = items[len(items)-1][0]

    for i in range(1, len(items)-1):
        item = Item(int(items[i][1]), int(items[i][2]))
        TotalItems.append([i, int(items[i][1]), int(items[i][2])])
        Prices.append(int(items[i][1]))
        Weights.append(int(items[i][2]))

    controller = Controller(TotalItems)
    vector = controller.makeVector(numberOfLines-2, Prices, Weights)

    randVector = controller.generate(iterations, numberOfLines-2, vector, Maxim)
    f = open(fileOutput, 'a')
    f.writelines(["Best fitness is: ", str(randVector[0]),
                  "\nBest vector is: ", str(randVector[1]),  "\n"])


def start():
    print("Program running..")
    print("1. Steepest Hill Climbing")
    print("2. Exit")
    string = int(input("Choice.."))
    switcher(string)


def switcher(argument):
    if argument == 1:
        file1 = "rucsac20.txt"
        file2 = "rucsac200.txt"
        iterat20 = int(input("Iterations for 20 items: "))
        program(file1, "rucsac20.out", iterat20)
        iterat200 = int(input("Iterations for 200 items: "))
        program(file2, "rucsac200.out", iterat200)
    else:
      if argument == 2:
        exit()
      else:
        print("Incorrect")

if __name__ == "__main__":
    start()
