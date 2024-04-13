import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
	to: string,
	path: string,
	Component: LazyExoticComponent<JSXComponent> | JSXComponent,
	name: string
}

const lazy1 = lazy( ()  => import(/* webpackChunkName: "LazyPage1" */'../01-lazyLoad/pages/LazyPage1'))
const lazy2 = lazy( ()  => import(/* webpackChunkName: "LazyPage2" */'../01-lazyLoad/pages/LazyPage2'))
const lazy3 = lazy( ()  => import(/* webpackChunkName: "LazyPage3" */'../01-lazyLoad/pages/LazyPage3'))

export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: lazy1,
		name: 'lazy-1'
	},
	{
		to: '/lazy2',
		path: 'lazy2',
		Component: lazy2,
		name: 'lazy-2'
	},
	{
		to: '/lazy3',
		path: 'lazy3',
		Component: lazy3,
		name: 'lazy-3'
	}
]