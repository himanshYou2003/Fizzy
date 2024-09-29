import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx';
import React from 'react'

type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    className?: string ;
}

export default function Button({buttonLink,buttonText,className}: Props) {
  return (
    <PrismicNextLink 
    field={buttonLink} 
    className={clsx("rounded-md bg-red-400 px-8 py-3 text-center text-xl font-bold uppercase tracking-wide text-gray-700 transition-colors duration-150 hover:bg-gray-400",className)}>
            {buttonText}
          </PrismicNextLink>
  )
}