class Item:
  def __init__(self, weight, price):
    self.weight = weight
    self.price = price
    
  def getPrice(self):
    return self.price
  
  def getWeight(self):
    return self.weight
  
  def setPrice(self, price):
    self.price = price
    
  def setWeight(self, weight):
    self.weight = weight
    