using Microsoft.AspNetCore.Mvc;
using InventoryApi.Services;
using MyStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace InventoryApi.Controllers
{
    [ApiController]
    //[controller]/[action] will go deeper into api ex. inventory/getinventoryitems(function name)
    [Route("[controller]")]
    public class InventoryController : ControllerBase

    {
        readonly InventoryFixedDataService _service;
        public InventoryController(InventoryFixedDataService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<InventoryItem> GetInventoryItems()
        {
            return _service.fixedData;
        }
        [HttpGet("{id}")]
        public InventoryItem GetInventoryItemß(int id)
        {
            return _service.fixedData.AsEnumerable().First( x => x.Id == id);
        }
        [HttpPost]
        public int AddInventoryItem(InventoryItem item)
        {
            return _service.Insert(item);
        }

        [HttpDelete("{id}")]
        public bool DeleteInventoryItem(int id)
        {
            return _service.Delete(id);
        }
        [HttpPost("update/{id}")]
        public InventoryItem Update(InventoryItem item)
        {
            return _service.Update(item);
        }
        //"firstpart is what you want to name it then/ passing in price"
        [HttpGet("findBelowPrice/{price}")]
        public IEnumerable<InventoryItem> findBelowPrice(double price){
            //
            return _service.GetItemsLessThan(price);
        }
        
    }
}