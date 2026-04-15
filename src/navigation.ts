const currentYear = new Date().getFullYear();

export const headerData = {
  links: [],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:coin', href: 'https://coff.ee/ricky9667' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ricky_hu_0110' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@ricky9667' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/ricky9667' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ricky9667' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://ricky-hu.com/">Ricky Hu</a> &copy; ${currentYear}
  `,
};
