---
layout: post
title:  "On π ..."
subtitle: "Mmm... 3.14159265358979..."
date:   2016-11-29 00:08:00
categories: math
---

The other day I was making an apple pie for a thanksgiving event with my friends,
my pastry didn't turn out so well so it ended up being more of a
crumble (US: crisp). However, it got me thinking about that most fundamental of
mathematical constants, usually the first transcendental number to which math
students are introduced, $$\pi = 3.14159265358979$$.

Archimedes knew about the ratio between the diameter of a circle and it's
circumference, and computed an approximation of
$$\frac{213}{71} < \pi < \frac{22}{7}$$ using inscribed and circumscribed
$$96$$-sided regular polygons, starting with two regular hexagons
composed of $$6$$ equilateral triangles, which have easily determined side length,
followed by some clever geometry Archimedes reaches his approximation. Methods
based on polygonal approximation were the best around until the 14th century.

Gottfried Leibniz provides a particularly nice infinite series to calculate our
favourite constant (this is a special case of a more general series expansion
  for the inverse tangent function discovered by Madhava of Sangamagrama in the
  14th century):

$$
\frac{\pi}{4} = 1 -\frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots
$$

Now, through the use of computer algorithms and infinite sums based on the work
of Srinivasa Ramanujan (and enough time):

$${\frac {1}{\pi }}={\frac {2{\sqrt {2}}}{9801}}\sum _{k=0}^{\infty }{\frac{(4k)!(1103+26390k)}{(k!)^{4}396^{4k}}}_{}$$

We can compute the value of $$\pi$$ to [22,459,157,718,361][ycruncher] places.

### Monte-Carlo integration for $$\pi$$

We are all aware of the fact that for a circle of radius $$r$$ the area is given
by $$A=\pi r^2$$. If we take a circle and circumscribe a square we can
see that the ratio between the area of the circle and the area of the square
is given by:

$$
\begin{aligned}
R &= \frac{\pi r^2}{(2r)^2}\\
&= \frac{\pi}{4}
\end{aligned}
$$

Let's use this fact to guesstimate $$\pi$$. Throw many tiny dots at your
square (Remember to count them, I'll use 1,000,000) and count how many land in
your circle (785,524 for me). Now we can estimate $$\pi$$ from this ratio.

$$
\begin{aligned}
R = \frac{785524}{1000000} &\approx \frac{\pi}{4}\\
3.142096 &\approx \pi
\end{aligned}
$$

(I used python code for my random sampling (Ain't nobody got time for all those dots).
 I would post it, but this problem in an  assignment for a course that I'm TAing.)

### More $$\pi$$ please

In my opinion one of the most beautiful identities in mathematics contains a
slice of $$\pi$$.

$$
e^{i\pi}+1 = 0
$$

This is Euler's identity and contains five very important mathematical constants
in the field of complex numbers, $$\mathbb{C}$$:

- The additive identity: $$0$$
- The multiplicative identity: $$1$$
- Our constant for this post: $$\pi$$
- The base of natural logarithms: $$e$$
- The imaginary unit: $$i$$


* * *
{: style="text-align: center; width:100%"}


If you need more $$\pi$$ than I can provide [$$\pi$$ day][piday] is March 14th
every year, and the internet has some vehement proponents of using [$$\tau = 2\pi$$][tauday]
instead. Make up your own mind about the beauty/ugliness of $$\pi$$.

[ycruncher]: http://www.numberworld.org/y-cruncher/
[piday]: http://www.piday.org
[tauday]: https://tauday.com
