export const PackageCreateForm = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white sm:w-113.5 sm:h-auto sm:rounded-3xl ">
      <div className="h-14 px-6 py-4 flex items-center">
        <h1 className="text-lg font-bold leading-6">Добавление посылки</h1>
      </div>
      <div className="grow p-6 overflow-y-auto">
          <div className="space-y-2">
              <label htmlFor="pickup-point" className="block text-sm font-medium">
                  Пункт выдачи
              </label>
              <select
                  id="pickup-point"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
              >
                  <option value="1">ПВЗ #1</option>
                  <option value="2">ПВЗ #2</option>
                  <option value="3">ПВЗ #3</option>
              </select>
              <label htmlFor="date" className="block text-sm font-medium">
                  Дата выдачи
              </label>
              <select
                  id="date"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
              >
                  <option value="1">01.01.2001</option>
                  <option value="2">02.01.2001</option>
                  <option value="3">03.01.2001</option>
              </select>
              <label htmlFor="id" className="block text-sm font-medium">
                  Номер посылки
              </label>
              <input
                  type="text"
                  id="id"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
                  placeholder="Введите номер"
              />
              <label htmlFor="name" className="block text-sm font-medium">
                  Имя
              </label>
              <input
                  type="text"
                  id="name"
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm "
                  placeholder="Введите имя"
              />
          </div>
      </div>
      <div className="h-18 px-6 py-4 border-t border-[#F3F4F6] flex items-center justify-end">
        Добавить
      </div>
    </div>
  );
};
