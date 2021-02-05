import Card from './components/card'

const noop = () => {}

function App () {
  return (
    <div>
      <Card
        item={{
          title: 'Cancel / recall payment, GBP 1,000. 00',
          subtitle: '1234567890123456 (GB), KUIML Business Company',
          req_ref: 'SET29383ABCH',
          category: 'Payment',
          isPending: true
        }}
        handlePdf={noop}
        handlePrint={noop}
        handleReject={noop}
        handleAuthorise={noop}
        handleDetails={noop}
      />
    </div>
  )
}

export default App
