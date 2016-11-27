---
layout: post
title:  "Welcome to the interwebs!"
subtitle: "Willkommen auf meiner neuen Website."
date:   2016-11-27 00:15:00
categories: jekyll
---


I've finally gotten round to setting up my Github Pages site, that I will be using as my main 
internet place. I hope I can be happier with this than I was the other $$n$$ times I tried to
do this.

Let's get the lowdown on the hoedown then. The site was produced with the following:

- [Github Pages][ghpages]
- [Jekyll][jekyll] static site generator (courtesy of GH pages)
- [Normalize.css][normalize]
- [Neat, Bourbon, Bitters and Refills][bourbon] for layout and other goodies.
- [font-awesome][font-awesome]

I decided not to use GFM for input and instead use default the kramdown (I think it's math support is 
better).

I'm going to try and record my {{'"musings"' | smartify}} fairly regularly, so there may be many
different unrelated kinds of posts pop up here. Only the newest 8 show up on the home page so in 
the near future I will have to make an archive for all the past posts (I may even try and do fancy
things with the categories).

I tried having a random quote on the front page, but I can't find an free API that lets me control the
maximum length of the quote. I also considered having comments, but does anyone even comment on a 
random person's ramblings on the internets.

Jekyll's markdown can do code

{% highlight python3 %}
def print_hi(name):
  print("Hi, {}".format(name))

print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

And math (with AMS math)

$$
\begin{aligned}
    f(x) &= e^{\frac{1}{x}}+x\cos(x)\\
    f^\prime(x) &= f^\prime(x) = -\frac{e^\frac{1}{x}}{x^2} + \cos x - x \sin x
\end{aligned}
$$

And I even found some Javascript that lets me write music
<pre>
X: 1
T: The Korgi
M: C|
L: 1/8
K: Hp
|: AAcA eAcA | GGBG dGBG | AAcA eAcA | BGBd egde :|
|: AAaA AeAA | GGBG dGBG | AAaA AeAA | BGBd egde :|
|: AAce aece | GGBd egde | AAce aece | BGBd egde :|
|: AAaA AeAA | BGBd egde | AAaA AeAA | BGBd egde :|
</pre>

[jekyll]:       http://jekyllrb.com
[bourbon]:      http://bourbon.io
[ghpages]:      https://pages.github.com/
[font-awesome]: http://fontawesome.io
[normalize]:    http://necolas.github.io/normalize.css/