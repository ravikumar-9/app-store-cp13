// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActiveTab, isActiveTab} = props

  const {displayText, tabId} = tabDetails

  const activeTab = isActiveTab ? 'active-tab-btn' : ''

  console.log(tabDetails)

  const onChangeTab = () => {
    onChangeActiveTab(tabId)
  }

  return (
    <li className="tab">
      <button
        type="button"
        className={`tab-button ${activeTab}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
