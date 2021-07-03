// Storage Controller
const StorageCtrl = (() => {

  const storageCheck = (item) => {
    let items;
    if (localStorage.getItem('items') === null) {
      items = [];
      if (item)
        items.push(item);
    } else {
      items = JSON.parse(localStorage.getItem('items'));
      if (item)
        items.push(item);
    }

    return items;
  }

  return {
    getItems() {
      return storageCheck();
      console.log(storageCheck());
    },

    storeItems(item) {
      const items = storageCheck(item);
      localStorage.setItem('items', JSON.stringify(items));
    },

    editStoredItem(item) {
      const items = storageCheck();
      items.forEach((strgItem, i) => {
        // console.log(strgItem.id === item.id)
        if (strgItem.id === item.id) {
          // console.log(items.splice(i, 1, item));
          items.splice(i, 1, item);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));
    },

    removeStoredItem(item) {
      const items = storageCheck();
      items.forEach((strgItem, i) => {
        if (strgItem.id === item.id) {
          items.splice(i, 1);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));
    },

    clearStorage() {
      localStorage.removeItem('items');
    }
  }


})();



// Item Controller
const ItemCtrl = (() => {

  // Item Constructor
  class Item {
    constructor(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  }

  // Data Strcture / State
  const data = {
    items: [
      // { id: 0, name: 'Steak Dinner', calories: 1200 },
      // { id: 1, name: 'Cookie', calories: 200 },
      // { id: 2, name: 'Eggs', calories: 150 }
    ],
    currenItem: null,
    totalCalories: 0
  }

  return {
    getItems() {
      console.log(data);
      return data.items;
    },

    updateWithStoredData(storageData) {
      data.items = storageData;
    },

    addItem(meal, calories) {
      let id;
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0;
      }

      const newItem = new Item(id, meal, parseInt(calories));
      data.items.push(newItem);

      return newItem;
    },

    updateItem(name, calories) {
      let returnItem;
      data.items.forEach(item => {
        if (item.id === data.currentItem.id) {
          console.log(item.id === data.currentItem.id);
          item.name = name;
          item.calories = parseInt(calories);
          returnItem = item;
        }
      });
      return returnItem;
    },

    removeItem(item) {
      data.items.forEach((itms, i) => {
        if (item.id === itms.id) {
          data.items.splice(i, 1);
        }
      });

      console.log(data.items);
    },

    clearItems() {
      data.items = [];
    },

    addCurrentValue(id) {
      if (id) {
        data.items.forEach(item => {
          if (item.id === parseInt(id)) {
            data.currentItem = item;
          }
        });

        // if (data.items[parseInt(id)] !== undefined) {
        //   return data.currenItem = data.items[parseInt(id)];
        // }
      }
      return data.currentItem;
    },

    getTotalCalories() {
      return data.items.reduce((a, b) => a + b.calories, 0);
    },

    logData() {
      return data;
    }
  }

})();



// UI Controller
const UICtrl = (() => {
  const UISelector = {
    list: document.querySelector('#item-list'),
    listItems() {
      return document.querySelectorAll('#item-list li');
    },
    addBtn: document.querySelector('.add-btn'),
    updateBtn: document.querySelector('.update-btn'),
    deleteMealBtn: document.querySelector('.delete-btn'),
    backBtn: document.querySelector('.back-btn'),
    meal: document.querySelector('#item-name'),
    calories: document.querySelector('#item-calories'),
    totalCalories: document.querySelector('.total-calories'),
    clearAll: document.querySelector('.clear-btn')
  }

  // Public Methods
  return {
    populateItemsList(item) {
      UISelector.list.innerHTML = '';
      if (item.length > 0) {
        item.forEach(item => {
          UISelector.list.innerHTML += `
          <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}:</strong> <em> ${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          </li>
          `
        });
      }
    },

    addListItem(item) {
      UISelector.list.style.display = 'block';
      UISelector.list.innerHTML += `
      <li class="collection-item" id="item-${item.id}">
      <strong>${item.name}:</strong> <em> ${item.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      </li>
      `;
    },

    updateListItem(item) {
      let list = Array.from(UISelector.listItems());

      list.forEach(UIitem => {
        console.log('UI:', UIitem.id.split('-')[1], 'itemID:', item.id, UIitem.id.split('-')[1] == item.id);
        if (UIitem.id.split('-')[1] == item.id) {
          document.querySelector(`#item-${item.id}`).innerHTML = `
          <strong>${item.name}:</strong> <em> ${item.calories} Calories</em>
           <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          `
        }
      });
    },


    displayTotalCalories(total) {
      UISelector.totalCalories.textContent = total;
    },

    addItemToForm(item) {
      UISelector.meal.value = item.name;
      UISelector.calories.value = item.calories;
      this.showEditState();
    },

    showEditState() {
      UISelector.updateBtn.style.display = 'inline';
      UISelector.deleteMealBtn.style.display = 'inline';
      UISelector.backBtn.style.display = 'inline';
      UISelector.addBtn.style.display = 'none';
    },


    clearFields() {
      UISelector.meal.value = '';
      UISelector.calories.value = '';
    },

    clearEditState() {
      this.clearFields();
      UISelector.updateBtn.style.display = 'none';
      UISelector.deleteMealBtn.style.display = 'none';
      UISelector.backBtn.style.display = 'none';
      UISelector.addBtn.style.display = 'inline';
    },

    hideList() {
      UISelector.list.style.display = 'none';
    },

    clearUI() {
      UISelector.list.innerHTML = '';
      UISelector.totalCalories.innerHTML = '';

    },

    getUISelectors() {
      return UISelector;
    }

  }
})();



// App Controller
const App = ((ictrl, ui, stgctrl) => {

  // load event listeners
  const loadEventListeners = () => {
    const UISelector = ui.getUISelectors();

    const itemAddSubmit = (e) => {
      if (UISelector.meal.value !== '' && UISelector.calories.value !== '') {
        const newItem = ictrl.addItem(UISelector.meal.value, UISelector.calories.value);
        ui.addListItem(newItem);
        const totalCalories = ictrl.getTotalCalories();
        ui.displayTotalCalories(totalCalories);
        stgctrl.storeItems(newItem);
        ui.clearFields();
      }

      e.preventDefault();
    }

    const itemEditClick = (e) => {
      if (e.target.classList.contains('edit-item')) {
        const itemId = (e.target.parentElement.parentElement.id).match(/\d+/)[0]
        const itemToEdit = ictrl.addCurrentValue(itemId);
        ui.addItemToForm(itemToEdit);
      }

      e.preventDefault();
    }

    const itemUpdateSubmit = (e) => {
      const currentItem = ictrl.addCurrentValue() // modifying this function to return cur if no value passed
      if ((UISelector.meal.value !== '' && UISelector.calories.value !== '')
        && currentItem.name !== UISelector.meal.value || currentItem.calories !== UISelector.calories.value) {
        const updatedItem = ictrl.updateItem(UISelector.meal.value, UISelector.calories.value);
        stgctrl.editStoredItem(updatedItem);
        ui.updateListItem(updatedItem);
        const totalCals = ictrl.getTotalCalories();
        ui.displayTotalCalories(totalCals);
        ui.clearEditState();
      }

      e.preventDefault();
    }

    const itemDeleteSubmit = (e) => {
      ictrl.removeItem(ictrl.addCurrentValue());
      stgctrl.removeStoredItem(ictrl.addCurrentValue());
      const totalCals = ictrl.getTotalCalories();
      ui.displayTotalCalories(totalCals);
      console.log(ictrl.getItems());
      ui.populateItemsList(ictrl.getItems());
      ui.clearEditState();


      e.preventDefault();
    }

    const clearAll = (e) => {
      ictrl.clearItems();
      stgctrl.clearAll();
      ui.clearUI();
      ui.hideList();
      e.preventDefault();
    }

    // Event Listeners
    UISelector.addBtn.addEventListener('click', itemAddSubmit);
    document.addEventListener('keypress', (e) => {
      if (e.keycode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    UISelector.list.addEventListener('click', itemEditClick);
    UISelector.updateBtn.addEventListener('click', itemUpdateSubmit);
    UISelector.backBtn.addEventListener('click', (e => {
      ui.clearEditState();
      e.preventDefault();
    }));
    UISelector.deleteMealBtn.addEventListener('click', itemDeleteSubmit);
    UISelector.clearAll.addEventListener('click', clearAll);

  }


  // Public Methods
  return {
    init() {
      ui.clearEditState();
      ictrl.updateWithStoredData(stgctrl.getItems());
      const items = ictrl.getItems();
      if (items.length === 0) {
        ui.hideList();
      } else {
        ui.populateItemsList(items);
      }

      const totalCalories = ictrl.getTotalCalories();
      ui.displayTotalCalories(totalCalories);
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();