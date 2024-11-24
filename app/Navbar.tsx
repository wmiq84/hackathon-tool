'use client'

import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const currentPath = usePathname();

	const links = [
		{
			label: 'Dashboard',
			href: '/',
		},
		{
			label: 'Tasks',
			href: '/tasks',
		},
	];

	return (
		<nav className="flex gap-5 border-b p-4 mb-5 h-14 items-center">
			<Link href="/">
				<FaLaptopCode />
			</Link>
			<ul className="flex gap-5">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={classNames({
							'text-zinc-900': link.href === currentPath,
							'text-zinc-500': link.href !== currentPath,
							'hover:text-zinc-800 transition-colors': true,
						})}
						// "text-zinc-500 hover:text-zinc-800 transition-colors"
					>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
