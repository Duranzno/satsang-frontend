import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import Head from 'next/head';

export interface BaseLayoutProps {
  title?: string
}
const useStyles = makeStyles(() => createStyles({
  baseLayoutRoot: {
    height: '100vh'
  },
}));
const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{title || "meditationApp"}</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;1,200;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <meta name="msapplication-TileColor" content="#ffffff" /> */}
        {/* <meta name="theme-color" content="#ffffff"> */}
      </Head>
      <div className={classes.baseLayoutRoot}>
        {children}
      </div>
    </>
  )
}

export default BaseLayout