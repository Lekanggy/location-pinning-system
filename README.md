# location-pinning-system
A small app use to pin customer location, using google maps api


## Installation

Clone the repo to your local machine using by using this command:

`git clone https://github.com/Lekanggy/location-pinning-system.git`

### Start server
You can run the server on whichever port of your choice. To change the port or any parameter on the server:

`cd apis/config/default`

to start the server from the root folder

run:

`yarn dev`

### Client 

Navigate to the root folder

`cd client/`
and run:

`yarn dev`

After successfully run both client and server side:

- Supply the customer info by filling all the available boxes.
- make sure to click the customer location on the map before submitting the form.


`Note:`

*Incase the map doesn't show up immediately try to refresh the browser. This may occur because the map use was on the development mode and no billing info was attached and neither a verification map id or apikey was attached.
So the more reason they were both exposed* 




