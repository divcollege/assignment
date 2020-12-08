const st = [];
jQuery(function () {
    //add item
    $('#addItemForm').on('submit', function (e) {
        e.preventDefault();
        const item = $('#addItem').val();
        const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));//random id
        st.push({ id: id, val: item, status: true });
        $('#addItem').val("");//emptying addItem


        strerender();

    });

    //delete item
    $(document).on("click", "button.delete", function (e) {
        // console.log(e.currentTarget.id);
        const id = parseInt(e.currentTarget.id);
        st.map(item => {
            if (item.id === id) {
                // console.log(st.indexOf(item));
                st.splice(st.indexOf(item), 1);
            }
        });
        strerender();
    });

    //completed task
    $(document).on("click", "button.complete", function (e) {
        console.log(e.currentTarget.id);
        const id = parseInt(e.currentTarget.id);
        st.forEach(item => {
            if (item.id === id) {
                console.log(st.indexOf(item));
                item.status = false;
            }
        });
        // console.log(st);

        strerender();
    });

    //st rerender
    const strerender = () => {
        $("#tasks").html("");
        st.forEach(item => {
            const html = `
            <div class="card" id="p${item.id}">
                <div class="row card-body">
                    <div class="col-sm-6">
                        <span ${item.status === false ? `class="strikethrough"` : ``} style=" font-size: xx-large;">${item.val}</span>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-success complete" id="${item.id}" ${item.status === false ? `disabled` : ``}>
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-danger delete" id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>`;
            $("#tasks").append(html);
        });
    }

    // function deleteItem() {
    //     console.log("del");
    // }

});