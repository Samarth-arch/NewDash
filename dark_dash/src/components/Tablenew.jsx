import React from 'react'

function TableRow({wardName,Address,Contact,Title,Description}){
    return (
        <>
       

         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {wardName}
                    </th>
                    <td class="px-6 py-4">
                        {Address}
                    </td>
                    <td class="px-6 py-4">
                        {Contact}
                    </td>
                    <td class="px-6 py-4">
                        {Title}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{Description}</a>
                    </td>
                </tr>
        </>
    );
}

function Tablenew() {

    const [complaintsData, setComplaintsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8080/maps/complains')
      .then(response => response.json())
      .then(data => setComplaintsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    
  return (
    <div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg top-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative top-5">
            <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-5">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                       Ward Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contact
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title 
                    </th>
                    <th scope="col" class="px-6 py-3">
                    Description
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr> */}

               
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
                <TableRow wardName="raj nagar" Title="probeelm encountered" Description="bwihdwwhdvwhbjkfe"Address="234 old palasia" Contact="91231244"/>
         
            </tbody>
        </table>
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Tablenew;