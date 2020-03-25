import math
import random
from random import randint

class Controller:
  def __init__(self, items):
    super().__init__()
    self.items = items
    self.vector_generated = []
    
  def getLength(self):
    return len(self.vector_generated)
  
  def getAllItems(self):
    return self.items
  
  def makeVector(self, n, prices, weights):
    vector = []
    i=0
    for i in range(n):
      vector.append([i, prices[i], weights[i]])
    return vector
  
  def random(self, n):
    v = []
    for i in range(n):
      v.append(0)
      
    d = pow(2, n) - 1
    number = int(randint(0,d))
    i=0
    while(number):
      bit_number = int(number) % 2
      v[i] = bit_number
      number = int(number/2)
      i+=1
    v.reverse()
    return v
    
  def countVector(self, x, v, n):
    c=0
    for i in range(n):
      c= v[i][2] * x[i] + c
    return c
  
  def fitnessVector(self, x, v, n):
    w=0
    for i in range(n):
      w = int(v[i][1]) * int(x[i]) + w
    return w
  
  def generate(self,k,n,vector,maxim):
    x = self.random(n)
    f1 = self.fitnessVector(x,vector,n)
    c = self.countVector(x, vector, n)
    bestF = f1
    bestX = x
    minc = c
    maximAux = maxim
    
    print("\nInitial vector is: ", x)
    print("\nInitial fitness is: ", f1, "\n")
    
    for i in range(k):
      x = self.random(n)
      for j in range(len(x)):
        if x[j] == 0:
          x[j] = 1
        else:
          x[j] = 0
        f1 = self.fitnessVector(x, vector, n)
        c = self.countVector(x, vector, n)
        if(c < maxim and bestF < f1):
          bestF = f1
          maxim = maxim - c
          bestX = x
      maxim = maximAux
    return [bestF, bestX]
    
  
