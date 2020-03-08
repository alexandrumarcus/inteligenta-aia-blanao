import random
#tema 2b
def load_file():
	f=open("date.txt","r")
	l=[]
	n=int(f.readline())
	for i in range(0,n):
		line=f.readline()
		s=line.split()
		s=list(map(int, s))
		l.append(s)
	w=int(f.readline())
	return n,l,w

def random_number(n):
	l=[]
	for i in range(0,n):
		l.append(0)
	d=pow(2,n)-1
	number=random.randrange(0,d)
	i=0
	while(number):
		bit=int(number)%2
		l[i]=bit
		number=int(number/2)
		i+=1
	l.reverse()
	return l

def fitness(x,l,n):
	w=0
	for i in range(0,n):
		w=w+l[i][2]*x[i]
	return w

def count(x,l,n):
	w=0
	for i in range(0,n):
		w=w+l[i][1]*x[i]
	return w

def generate_valid():
	n,l,w=load_file()
	x=random_number(n)
	w1=fitness(x,l,n)
	while w1>w:
		x=random_number(n)
		w1=fitness(x,l,n)
	return x,w1;

def generate(k):
	n,l,w=load_file()
	print("Lungime:"+str(n))
	print("Lista:"+str(l))
	print("Fitness-ul maxim:"+str(w))
	print("\n")
	x=random_number(n)
	w1=fitness(x,l,n)
	c=count(x,l,n)
	bestf=w1
	bestx=x
	minc=c
	for i in range(0,k):
		x=random_number(n)
		#print(x)
		w1=fitness(x,l,n)
		#print(w1)
		c=count(x,l,n)
		#print(c)
		if w1<w and w1>bestf and c<minc:
			bestf=w1
			bestx=x
			minc=c
	return bestf,bestx,minc

def main():
	x,w1=generate_valid()
	print("Solutia generata aleator este:"+str(x))
	print("Solutia generata are fitness:"+str(w1))
	print("\n")
	bestf,bestx,minc=generate(10000)
	print("Cea mai buna solutie gasita:"+str(bestx))
	print("Fitness-ul:"+str(bestf))
	print("Valoare:"+str(minc))
main()