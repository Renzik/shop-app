import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Sharp Shirter Awesome Godzilla Shower Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/71bImDCrgVL._AC_SY355_.jpg',
    'Sharp Shirter shower curtains are printed on a super soft 100% Polyester Fabric. Each curtain measures 71 x 74 inches (180 x 180 cm) and is made to fit a standard size bath tub or shower space.',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Ocean Wave Shower Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/61G--wvq52L._AC_SY450_.jpg',
    'This is a japanese kanagawa wave-themed shower curtain, showing a oriental atmosphere.Astronauts Riding Whales in Ocean Wave, adding richer Funny decoration to the bathroom.',
    29.99
  ),
  new Product(
    'p3',
    'u1',
    'Tropical Desert Fabric Shower Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/61AFCdtoGRL._AC_SY355_.jpg',
    'KEEPS WATER INSIDE -- NEW resin coating technology keeps water slide off the fabric shower curtain and quick drying. No liner required.',
    99.99
  ),
  new Product(
    'p4',
    'u2',
    'Mountain Forest Shower Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/71UZsReqCsL._AC_SL1500_.jpg',
    'DURABLE FABRIC: Our Lake Mountain Nature Landscape Shower Curtain is made of waterproof materials. Environmentally friendly, and the good drape can prevent shower curtain creep keeping the water in and the cold air out.',
    8.99
  ),
  new Product(
    'p5',
    'u3',
    'Hokusai Great Wave Shower Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/81wZZCgPSSL._AC_SL1500_.jpg',
    'Material：Polyester fabric,moderate thickness,no harmful dyes;',
    15.99
  ),
  new Product(
    'p6',
    'u3',
    'Japanese Bamboo Trees Sun and Mountains Bath Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/61yku0dJZAL._AC_SX522_.jpg',
    'Fabric Shower Curtain- High quality polyester shower curtain,No liner needed,Includes plastic "C" shower curtains hooks.',
    15.99
  ),
  new Product(
    'p7',
    'u1',
    'Mystic Forest Bathroom Curtain',
    'https://images-na.ssl-images-amazon.com/images/I/81aURag1rFL._AC_SL1500_.jpg',
    'AMAZING MATERIAL: Red forest shower curtain is made of polyester fabric, comfy, skin soft, waterproof and durable enough to bright your bathroom.',
    5.49
  ),
  new Product(
    'p8',
    'u1',
    'River Dream Hotel Grade No Hooks Needed Shower Curtain',
    'data:image/webp;base64,UklGRqgPAABXRUJQVlA4IJwPAABQbgCdASosASwBPrFWokukIqQmItEKaMgWCekvTC7880t10KH/FVfNuNt8j9Z2+ueAfQvF7088V7LG3N3Rze+IeoK/etmgiUlJVOwV9cpCwIxcFb6t15XumXOrhKQcf/ApyGmtB/yv67Up1pQdBjjt3lrz+FDkZMm2vb/IkZdhRX12P7fc7Nt3BOUskG2Ifmhl6TYqRzeJt0YQ6crJiJDbG0Pt1NKNN44gJwg2eYe3OR+xK1e0JTZZj22MXkp7JxPHkK9PztRzvaH4SOBu4CoEGt9nDol9n0yQfbpEeVzeSjhSNgCVloogUJp/9UjIj8bB1ywE+V7iYA3Pq0DpajUx8ychMDJQvtqhw0yOkmPN1twAziFGQK/CHRS/Bb1imjzegRxZk7MJOs1BA3+mIYHMRKP19azkMvlShod8pJkCiBF2+s5V8iKv6w/L6bn0YPW+O+O+U5GCYn1CddDJRTA6NkB7f6QhHVOjmi0WNyi6vWXAu1ho/SaZjGTcvjSXWoktTB8Ic3TSBHHXNGzqe0qwI0x6nCUn3iF7OU9MQ+euBixNclSxfUgKVWrj3Pid97SDi0+Wr8sum0DGMuphAKD0I/5dGWVHYRdulywwacwp464h/g5coq4g+U4dIAbbI9EP/MfwgKD595ZIW+XsxPEnGl9e2p/Lc/y3FAQ6YKLKnnluPlecSpyq4/2ANZfDU6XgbfvqEbP+rjkyq7oeL78YOURmYjUhw9mSEsyZ7OpxMTdyvzcg/DCkM6xDmlQ77jGyqbi5v781pCa9JuuDCXqefLB6bEaVyoH3+rhiNedAgofrrnmIEuQ0NjH9RJBmHJkkmKv+uuob5A4ICjkT540nDZzfo6USdV+8YMxASSYAA6vWE9/6VZ0IZQjxMDDXxmxm5/PXtKCv8PKI7yCKPlW8/EBn0zSrEDWcNI2WvtbHdPegNGqMZGIcBOkUT7kc8fRrdrV346xKEQImPCmNW1pML1z6vJRKYqznuL6nfT6kS+d6WF8AppBsD3K22wC44mrxfFlXXEPBoUFidHr0DotPL6RLXfU8CAa7ugHf7dzIhaU79UtWERFKLj/ix8ZaHFAVtleDt4qPj2NNxeEhDvPH4naKOrUHYRzvvuz2ca2dVxVYUCp0yLliZkg+FmXmzyyPpBun2wggLdEEoJUKtnfJ5tVZzFwnKxKwOAAA/vDfDXRB7rs3GgO6uqgpMewHwKpNS8FlCecUblc7Bhlc1QIEAYjyUSrVGQCLIOB29HcnDlxfl1d3Xhq0801e9w1dwIOy3KZWsht3Pl9WmPRySVetPQ3Yyg4cR1PRrDbE7Ddzw5KRdsN+KSs30yElehL95VyHhBkxoYSa7NaxgiUaY/TDa7nz/bvptCMplzT/hOe3dxKUgjbx4wRAsZPuFf3D6DG2SS1ZQ2y73T1ooim2UJiv32hwbkKRQzVG7LHWhCdFwaBLW1VP9ZSKbY/bYcNEeOydS1U8CzMOrXWl6W3xgJhE8YQBPuCBxmB5DgW3JV+89UGVQAn4kDXrnbmrnPVAaOFUS0PDzCoeXdLKgwmKc12ZPeTPzpBKUInZtsRJxIJIKPcKRrnqeFy+slQuYrykaj/p0N5iPYX2cN6qo50BUeGGXuzaFTE7mdxvajtfMFLUalT+iNNMTS4vq3AXlF37trCJ0FgFx3Lt7nV9YmUf/dU96KjWvZ1MIfamACzywuPgiyPFvbj6RMOp4L4wpQfHQl3u/hmsCKMITV5Frt9h33df8rw45RHDA71py8v2ONiPyl30t8uG+N1jzXcQ0Wqb0W5/OL0CNHCRV0MzHs/m5uenGwBxAMOLpNPH9jxnVxaBX/7D8VrsL5W5fLtntEViLY1D0HF/dTIaMWu7PVcE6/vRz0jpu8SLbyEicU8fV8vuI8yXw77/leHnswnC7t6/Zz3Vm6c397vBaBgtn6m2YQ/sGTat8iAuB80rJwpLT0GaD2EYtq6KU+cohp5fbd3AQ7iZWo8IT3HTu4N3ZKwk1xeyV51IkQ4i7/dJBu9rQUiE2ZwJN+vjQIiiri0eFsKutqxjgQ+LHHF0646A9/OUyDho6gU3MHfWsqWDi8h0aCWZW/8M2x//pHeym5HMBYUBKmtHlu4pLk09w79QZF+NV0yrZvsYJymEiYuUFfvQFGA7ODUG05MR/1qTRR6ypgyrZK00PwarDuBxlHzm/ZCkdbOzoGVsYQNWNHj4B8wcnY0nwBI4gzok6qAOvOBljrfeI7QmddZXcmVgGlrU2tqM/ubWsNlGkvA86N7hvDTaTTWZTHbBYlqWGnp6tv/T1r1lVRGqrZNTqHlpAenr6XljZjF47YCdcMrxgLQqtdNAUsVPp3oVbH7VtA+p/Bj6Bm5tjVpjn5deBcAMPGgauy8ci0gCCxRmvyiSxwNq2PpLSkbbSMBCuWhtmYu8a0sKWtKgeCUW8FB6hYL1bzCArQPIzhXTkN+loPsOLSHlSv5tsusIFEn7sw9hst+YmNCy/2m0q955L3yXZ1WpP22utf6FyhMg4PKlrTyFlPY7TQ14woMw7JSYPLufQvqNfZ/vDooCFpVz43/GhRiuAmgRNv9xQE0/SIgKSAu+D88yVau7gN0vp0IwPjC2G6WkEuCgZ9+QlVbjWgc4UMSrtpV0Eciw3zEL7fh7LOUYWH+6XK65pphtUdSI+3wq78/h0rZX58r/DXCtDh5Oq79hWDpdUiqCRy+K/TUszyCJ2MGxQvsWJM9/81i1DlAxigqJ41LQ/MzYFo1nI2uRLdmK63MlyM/yYCVcPvf5387HNCHP1gSzZ9jNUTVFwZqkABTha5y5KBDHyvrKVQZWJs8NRP+3TFK8q53cTdHpJTyINKqDYxAABLg+KoFq9kBZy569x90Ep7G3Z38yfAopXmSrYIzmj0hbwvkSesjuVYYKr4RCLsWuFx9aZ/n01/sb9BN/fA4brL8GAdQXbsLFzr+jDeTx4UXEUvvaFshwbVuTUg0u3SIhwbsYSq2UcAS0slXEW/8Y4xhuKyj/+qB2AKrq+5h1+7lf205neGXxdCmXD/lkk5sAZKAnsuQMMQkpqOaRMIjOPEW4rRG7BxMIWIejDKxFBtY+L9UnPGBP5sjBPiRtLegtmayGyAGOU5AMsNi6nNKTnVKWZd+xCxZcnYjTDsDRUAd1ZmHfnUkETQNhSKAlYRKG2G60HyUPgVg4rsubybpGiYI4m3aU6L8+XUdFEWwQMv+Iu70vKZMrVxO3hgDs4twDqU+ilWrtNRm/6rRjcc1s8T5LFkTHc+PgaqcqCWRXIYnthAjqKIwvCrthNCGFfWp+dmIf7CUPn7WMG5KPGSl+Im1RZzpa9/fNTM80ZYbPTg2n9c4T83wETT7yJKe3grwZjdD3xxPDeRngxd6frkVD4wro4nyzbWU+rpqalVuIMffhE0cv9eRgecZlgld1rqZPHan//jZHSIEvr4g3UtluViMz4G8dDCyPXZqCDzugv9W2oPHP1cJU4z447wgD7iIHvYnet3ixFqax9u0Au2YZ/6fAEHHPAgN/RSv2BgROIcLX2SGydNUVArZt+I9DsDXJAVOMlnK0LdKANaZx2Q1K2kT0h4ntYskVXADV2gkhO4iDHkedL6lIs9yfpN6+BcSpn/C1COQhdBnhpnCrf5jqh8QvhH8jiVPHeRKgaddtpmh4U1XEyorBfjP7m3I5fFMLU1W4l5d4Xcrzd3T3q1lHC8pQ3wGg3JQM/8rt7heWc3V0dyAuYbKlxTbtPP1q/RBJUGaN78m6mzKL9QFyALrxE6nZrJcTdb5QsxwU3ai6lrKaIaImNi1zDnoxDEi7Eg5BsMqWEfqUBb8sSOaURR1/DzIOQFg9/7c5aAXEUjCt8QRKxDU4Tsk/Wbnam1D6b0IwX1BlvC/T8wDwC4Hk6lX/wm4rrpuKjmI0x7UMLAU0ULUKzA9vO8LBSAFmCJffxuAAGdYWmopBkfLX9cRszksADtA9Z0kgHcVn3kiuBvLTrzCCI+KypvUiEu3RyOwgwJGlDtfYYzGmz+WVWPgcXLpCKeSnwKt2q4XLBUDKLsKdP/7X6SL2dbtgJWtq9TJb0MfTMMODr4jqneRbDUzsHq9qiKSmFugQZ0SX0T4CqKFKlkn8RtEs4BJPGAVoGeXUNDL6240PuibS6dXbz9lmT6g9HDMfViBLiW4ldualUfLjCVbtWrkXZPuS2hAmdE6quR0YuvBTX4YfddHrHg74couj9kYUcJUZU1BdWZKwCYxfHv9357lRrI/IULco5ad/kGTlUMeQUWlchqJ8NqZREixpeNpJpD/IQEKu6RBR58BM8m5WJktN4NJPAHzA17MfEIcand7zm1NPen+M3ks+DBCT3k44hzyFM621Qt+NRWWZYQGpDf1UThcy9X485FLSccU7vI6ZIMdX8Be2QMVXk8+lwIHpBhmxRshm3iBHIFTj32HXmWIvvMwDXBwVmqpl1Wyvok1PowYutm5Rkz+CvlfLTx/BCEK2X9XfuFs8qGV4pfeZb3McqvjxfKadrRX/XLHvljjqgnoK9vNplxi/M99jvoBglgmcQBeUVZAcTRJlF1GTCyLJOxTkZcuj9YUWWEeHphOJ56uN/507K5QOnNqc4IKE0hU6NMt3xVU6ATmRGwCZtjskb+8xZ4YgR2KqW7h+h0Us97XRoj3JzICHvSjHHsA+NnY6Ozlx0xWqQ08Jw+QZwsAWlKH2l6ZCBv7YHEyz4lNiwJ3nbgxWVZo6ftEdGmdV3zZoe35/vJbF/VzvBwoTmLqWO5OIQj1dsT1aGWYJogZW7vRAxIDOqFfXABo81RnYdk1GOFjLUrmWN3ZTWL3dHYq1Ft9tF3AhBupm3f20Mw/eEJmSJheOaQWYgsg7vrEkpGUQvu7IFw24e5v9OtnKMsN4deoYggizTRf5mTxXcBEqXyG+OlPud7k4ZFFDjIxBBbnUxburWIa2E20Se/8fBXQGwptYsXAI9em5UFeZbPgISGCsZxsRPTHczARIkmXKSWKZnRsEWeD8NXT1NEgkiBhqT4AXOGNnjmNjkBeougmoN6VhKN5roHhXikmrODFk7YMh7ZrNAAFG9eaj9/Hxw4mdDllPUgdK23Pqzvs6ymnnZHgnbjQj26CzBOSKWEQ+JuCiEayxBT7YHcdaQps1RiwkYeVrZO6DIaKW6VzMXQop8MEiOO+0elVLClj33/Pbwi5xoUm4R51amu05ec+lB6Y7l0+p9XKN9EClcVV0cVA2Tn5HaaL5L6X2NjyoxxZDyUuCBrDrZopGQUfA7tcYiKuZ6NKMLoilVN9ZM8cW9u2a6xeCsHOdYikp0jUrXA0IYt9GQWiCULq/0tKAAAA=',
    'Include: 1 x Shower Curtain - Water Repellent (No Snap In liner needed)',
    5.49
  ),
];

export default PRODUCTS;
