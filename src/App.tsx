import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useEagerConnect from 'hooks/useEagerConnect'
import { ResetCSS, ChevronUpIcon } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { CHAIN_ID } from 'config/constants/chains'
import {
  useFetchStats,
  useFetchPublicData,
  useFetchStatsOverall,
  useFetchAuctions,
  useFetchTokenPrices,
  useFetchProfile,
  useNetworkChainId,
} from 'state/hooks'
import { useDispatch } from 'react-redux'
import { fetchUserNetwork } from 'state/network'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))
const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Nft = lazy(() => import('./views/Nft'))
const Nfa = lazy(() => import('./views/Nft/Nfa'))
const ApeZone = lazy(() => import('./views/ApeZone'))
const Stats = lazy(() => import('./views/Stats'))
const Auction = lazy(() => import('./views/Auction'))
const AdminPools = lazy(() => import('./views/AdminPools'))
// Commented out until release
// const NfaStaking = lazy(() => import('./views/NfaStaking'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const StyledChevronUpIcon = styled(ChevronUpIcon)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 179, 0, 0.7);
  border: 1px solid #ffb300;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
`

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  const { account, chainId } = useWeb3React()

  useEffect(() => {
    console.warn = () => null
  }, [])

  useEffect(() => {
    if (account) dataLayer?.push({ event: 'wallet_connect', user_id: account })
  }, [account])

  const appChainId = useNetworkChainId()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserNetwork(chainId, account, appChainId))
  }, [chainId, account, appChainId, dispatch])

  useEagerConnect()
  useFetchTokenPrices()
  useFetchPublicData()
  useFetchProfile()
  useFetchStats()
  useFetchStatsOverall()
  useFetchAuctions()

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const loadMenu = () => {
    // MATIC routes
    if (appChainId === CHAIN_ID.MATIC || appChainId === CHAIN_ID.MATIC_TESTNET) {
      return (
        <Menu>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/admin-pools">
                <AdminPools />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Menu>
      )
    }
    // Default BSC routes
    return (
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path="/nft">
              <Nft />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>
            <Route path="/admin-pools">
              <AdminPools />
            </Route>
            <Route path="/iao">
              <Ifos />
            </Route>
            <Route path="/auction">
              <Auction />
            </Route>
            <Route exact path="/nft">
              <Nft />
            </Route>
            <Route path="/nft/:id">
              <Nfa />
            </Route>
            <Route path="/gnana">
              <ApeZone />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            {/* Redirect */}
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
    )
  }

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      {(window.location.pathname === '/farms' || window.location.pathname === '/pools') && (
        <StyledChevronUpIcon onClick={scrollToTop} />
      )}
      {loadMenu()}
      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
