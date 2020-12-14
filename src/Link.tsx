//@ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, children, ...other } = props

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other}>
        {children}
      </a>
    </NextLink>
  )
})

NextComposed.propTypes = {
  //@ts-ignore
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool,
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

interface Props {
  activeClassName: string
  as: string | object
  className: string
  href?: string | object | { pathname: string }
  innerRef: Function | object
  naked: boolean
  onClick: Function
  color: string
  prefetch: boolean
}
const Link: React.FC<Props> = (props) => {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />
  }

  return (
    <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...other} />
  )
}

export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />)
