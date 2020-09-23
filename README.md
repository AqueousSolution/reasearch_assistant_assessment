1. FINANCE
a)Write a 500-word explanation of Bitcoin stock-to-flow model and make an argument for why it is a bad model?

ANS
The stock-to-flow model is a bitcoin model popularized by a certain Dutch institutional investor who operates under the Twitter account “PlanB,” and has been widely praised as the leading valuation model for bitcoin proponents. Stock-to-Flow model has achieved viral popularity and inspired rags-to-riches dreams for those gambling it all on the future of bitcoin. 

PlanB’s paper “Modeling Bitcoin Value with Scarcity” states that certain precious metals have maintained a monetary role throughout history because of their unforgeable costliness and low rate of supply. For example, diamond is valuable both because new supply (mined diamond) is insignificant to the current supply and because it is impossible to replicate the vast stores of gold around the globe. PlanB then argues this same logic applies to bitcoin, which becomes more valuable as new supply is reduced every four years, ultimately ending up in a supply of 21 million bitcoin. 

Low rate of supply, which PlanB defines as “scarcity,” can be quantified using a metric called Stock-to-Flow, which is the ratio between current supply and new supply.

This premise is then translated into the hypothesis, “…that scarcity, as measured by Stock-to-Flow, directly drives value.” PlanB then plots bitcoin’s Stock-to-Flow against USD market capitalization as well as two arbitrarily chosen Stock-to-Flow data points for gold and silver.

PlanB then runs a linear regression using the natural logarithm of bitcoin’s Stock-to-Flow metric as the independent variable and the USD market capitalization as the dependent variable. The paper ends with the conclusion that there is a statistically significant relationship between USD market capitalization and SF values, as evidenced by the linear regression resulting in an R2 (a statistical measure of how close the data fits to a regression line) of ~0.95. The two randomly chosen data points for gold and silver are in line with bitcoin’s trajectory and presented as further evidence of the hypothesis. 
PlanB suggests that investors can forecast the future USD market cap of bitcoin using the above formula. 


Many arguments abound for why this popular model is a bad model. Some of which include;

1.	From a theoretical point of view, the model is based on the rather strong assertion that the USD market capitalization of a monetary good (e.g. gold and silver) is derived directly from their rate of new supply. No evidence or research is provided to support this idea, other than the singular data points selected to chart gold and silver’s market capitalization against bitcoin’s trajectory. 
   2. The stock-to-flow model has been a novel way of looking at bitcoin’s early, meteoric years. However, it will soon break because it predicts nonstop doubling year after year. By 2045, the model estimates each Bitcoin will be worth $235,000,000,000 before eventually converging to infinity as bitcoin’s flow approaches 0. Using the estimated slope-intercept formula is making the most naive prediction possible, because bitcoin grew by X in the 
past, does not necessarily imply it will grow by X in the future. One should remember that past results are not representative of future returns.


b)(Please show your workings). Yara Inc is listed on the NYSE with a stock price of $40 - the company is not known to pay dividends. We need to price a call option with a strike of $45 maturing in 4 months. The continuously-compounded risk-free rate is 3%/year, the mean return on the stock is 7%/year, and the standard deviation of the stock return is 40%/year. What is the Black-Scholes call price?

ANS

(t)Time to Maturity = 4months(0.33)
(Po)Current price = $40
(X)Strike price =$45
(kRF)Risk free rate = 3%(0.03)
(σ) Volatility = 40%(0.4)


d1 = ln(Po/X) +(r +σ^2/2 )(t)/σsqrt(t)

= ln(40/45) + (0.03 + 0.4^2/2)0.33/0.4sqrt(0.33)
=-0.08148/0.22978
d1= -0.35 

d2= d1 - σsqrt(t)
    = -0.35 - 0.4(0.574456)
    = -0.35 - 0.22978
    = -0.57978
d2 = -0.58

Using Standard Normal Distribution Table
N(d1) =0.36
N(d2) =0.28

Black-Scholes call price = SN(d1) - Ke^−rtN(d2)
                                         = 40(0.36) - 45e(−.03(0.3))(0.28)
					=40(0.36) - 44.55(0.28)
					= 2.02


2. COMPUTER SCIENCE

a) Why is it a bad idea to use recursion method to find the fibonacci of a number?  

Ans

Using recursion method to find the fibonacci of a number is a bad idea because as the nth term  parameter(e.g. 67, 100, etc) increases  it takes a longer time to generate our fibonacci number. The reason for the poor performance is due to the heavy push-pop of the stack memory in each recursive call. It is faster and better to use the iteration method instead

b) Write a function that takes in a Proth Number and uses Proth's theorem to determine if said number is prime? You can write this in any programming language but C/C++/Golang are preferred

Ans

programming language = JAVASCRIPT

const prothPrimeChecker = (prothNumber) =>{
	let arr = [];
	let d = prothNumber - 1;
	let power = d/2;
	for(let a = 2; a<15; a++){
		arr.push(Math.pow(a,power)+1)
	}
	console.log(arr);
	const factorCheck = arr.map(el=>el/prothNumber);
	
   const isItPrime = factorCheck.some((e)=>Number.isInteger(e));
	return isItPrime?'This number is prime':'This is not a prime number'
}

3. MATHS
