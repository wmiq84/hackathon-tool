import Link from 'next/link';
import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
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
						className="text-zinc-500 hover:text-zinc-800 transition-colors"
					>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
