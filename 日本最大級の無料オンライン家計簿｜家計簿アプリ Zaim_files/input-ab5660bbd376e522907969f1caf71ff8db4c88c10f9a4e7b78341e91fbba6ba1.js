(function() {
  (function() {
    var before_genres_length;
    if (window.navigator.userAgent.toLowerCase().indexOf('windows') !== -1) {
      if (!Array.indexOf) {
        Array.prototype.indexOf = function(target, index) {
          var i, j, ref, ref1;
          if (!target) {
            return -1;
          }
          if (isNaN(index)) {
            index = 0;
          }
          for (i = j = ref = index, ref1 = target.length - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
            if (this[i] === target) {
              return i;
            }
          }
          return -1;
        };
      }
    }
    before_genres_length = 0;
    $.widget('zaim.genre_autocomplete', $.ui.autocomplete, {
      _create: function() {
        this._super();
        return this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
      },
      _init: function() {
        var openButton, that;
        this._super();
        this._closing = false;
        that = this;
        $(this.element).on('focus', function() {
          return $(this).genre_autocomplete('search', '');
        }).on('change', function() {
          if (!$(this).genre_autocomplete('option', 'single')) {
            return $(that.options.valueField).val('');
          }
        });
        if (this.options.openButton) {
          openButton = $(this.options.openButton);
          return $(openButton).on('click', function() {
            if (!that._closing && that.menu.element.is(':hidden')) {
              that.element.focus();
              that.search('');
            }
            that._closing = false;
            return false;
          }).on('mousedown', function() {
            if (!that.menu.element.is(':hidden')) {
              return that._closing = true;
            }
          });
        }
      },
      _renderMenu: function(ul, genres) {
        var allCategoryIds, blankCategoryIds, category, categoryId, genre, j, k, key, lastCategory, len, len1, renderCategoryLine, renderedIds, results;
        renderCategoryLine = function(category) {
          return ul.append($('<li>').append(document.createTextNode(category.name)).addClass('ui-autocomplete-category'));
        };
        lastCategory = null;
        renderedIds = [];
        if (!this.matched) {
          ul.append('<li class="ui-autocomplete-head">カテゴリを選択してください</li>');
        }
        for (j = 0, len = genres.length; j < len; j++) {
          genre = genres[j];
          if (genre.category_id !== lastCategory) {
            category = this.categoryMap[genre.category_id];
            renderCategoryLine(category);
            renderedIds.push(genre.category_id);
            lastCategory = genre.category_id;
          }
          this._renderItemData(ul, genre);
        }
        allCategoryIds = (function() {
          var results;
          results = [];
          for (key in this.categoryMap) {
            results.push(Number(key));
          }
          return results;
        }).call(this);
        blankCategoryIds = (function() {
          var k, len1, results;
          results = [];
          for (k = 0, len1 = allCategoryIds.length; k < len1; k++) {
            categoryId = allCategoryIds[k];
            if (!~renderedIds.indexOf(categoryId)) {
              results.push(categoryId);
            }
          }
          return results;
        })();
        results = [];
        for (k = 0, len1 = blankCategoryIds.length; k < len1; k++) {
          categoryId = blankCategoryIds[k];
          results.push(renderCategoryLine(this.categoryMap[categoryId]));
        }
        return results;
      },
      _renderItem: function(ul, genre) {
        return $("<li>").attr('data-genre-id', genre.id).append($('<a>').append(genre.label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, ' &quot;').replace(/'/g, '&#39;')).append($('<span>').append(genre.code).attr('class', 'code'))).appendTo(ul);
      },
      _suggest: function(genres) {
        var itemElement, ul;
        if (this.menu.element.find('li').length > 0 && genres.length === before_genres_length) {
          ul = this.menu.element;
        } else {
          before_genres_length = genres.length;
          ul = this.menu.element.empty();
          this._renderMenu(ul, genres);
        }
        this.isNewMenu = true;
        this.menu.refresh();
        ul.show();
        this._resizeMenu();
        ul.position($.extend({
          of: this.element
        }, this.options.position));
        if (this.options.autoFocus) {
          this.menu.next();
        }
        this._on(this.document, {
          mousedown: "_closeOnClickOutside"
        });
        itemElement = this.menu.element.find("[data-genre-id='" + this.selectedValue() + "']");
        if (itemElement.length && this.menu.activeMenu.length) {
          return this.menu.focus(null, itemElement);
        } else {
          return this.menu.next();
        }
      },
      selectedValue: function() {
        return $(this.options.valueField).val();
      },
      options: {
        source: function(request, response) {
          var genre, items, match;
          this._closing = false;
          match = function(genre, term) {
            if (!genre.text) {
              genre.text = genre.label.toLowerCase() + ' ' + genre.code.toLowerCase();
            }
            return genre.text.indexOf(term.toLowerCase()) >= 0;
          };
          items = (function() {
            var j, len, ref, results;
            ref = this.genres;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
              genre = ref[j];
              if (match(genre, request.term)) {
                results.push(genre);
              }
            }
            return results;
          }).call(this);
          if (items.length > 0) {
            this.matched = true;
          } else {
            this.matched = false;
            items = this.genres;
          }
          return response(items);
        },
        minLength: 0,
        delay: 0,
        select: function(select, ui) {
          var target;
          if (ui.item && ui.item.label) {
            $(this).val(ui.item.label).prop("selected", true);
            target = $(this).genre_autocomplete('option', 'single') ? $(this).parent().find($(this).genre_autocomplete('option', 'valueFieldSelector')) : $($(this).genre_autocomplete('option', 'valueField'));
            target.val(ui.item.id);
            return target.trigger($.Event('autocomplete:select'));
          }
        },
        change: function(event, ui) {
          var target;
          if (ui.item && ui.item.label) {
            target = $(this).genre_autocomplete('option', 'single') ? $(this).parent().find($(this).genre_autocomplete('option', 'valueFieldSelector')) : $($(this).genre_autocomplete('option', 'valueField'));
            return target.val(ui.item.id);
          }
        }
      }
    });
    $.widget('zaim.place_autocomplete', $.ui.autocomplete, {
      _create: function() {
        this._super();
        return this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
      },
      _renderItem: function(ul, item) {
        return $("<li>").append($('<a>').append($('<span>').append(item.label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, ' &quot;').replace(/'/g, '&#39;')).attr('class', 'place-name')).append($('<span>').append(" " + item.count + " 回").attr('class', 'place-count'))).appendTo(ul);
      }
    });
    $.calculator.zaimLayout = ['_7_8_9_+BS', '_4_5_6_-CE', '_1_2_3_*CA', '_0_._=_/@U'];
    $.calculator.setDefaults({
      backspaceText: '←',
      clearErrorText: 'C',
      clearText: 'AC',
      closeText: '中止',
      useText: '確定',
      eraseText: 'クリア',
      'text_*': '×',
      'text_/': '÷',
      'text_-': '−',
      'text_+': '+',
      layout: $.calculator.zaimLayout,
      maxDigits: 9
    });
    $.datepicker.setDefaults($.datepicker.regional["ja"]);
    $.datepicker.setDefaults({
      dateFormat: "yy年m月d日（D）",
      firstDay: 1
    });
    $.modalNewMoney = function(date) {
      var detail, error, event, modal;
      if (typeof UseEuropeanCurrency !== 'undefined' && UseEuropeanCurrency) {
        showGdprCaution();
        return;
      }
      modal = $('#inputModal');
      detail = {
        date: date
      };
      event = null;
      try {
        event = new CustomEvent('new_money', {
          detail: detail
        });
      } catch (error1) {
        error = error1;
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('new_money', false, false, detail);
      }
      window.dispatchEvent(event);
      modal.find('.submit_spinner').hide();
      modal.modal('show').height(window.innerHeight * 0.8);
      modal.find('.btn-input.btn-modal').prop("disabled", false);
      return $('.modal-backdrop').on('click', function() {
        return $('.modal').modal('hide');
      });
    };
    $.modalEditMoney = function() {
      var modal;
      if (typeof UseEuropeanCurrency !== 'undefined' && UseEuropeanCurrency) {
        showGdprCaution();
        return;
      }
      modal = $('#editModal');
      modal.find('.modal-body.content').html('');
      modal.modal('show');
      modal.find('.btn-input.btn-modal').prop("disabled", false);
      $('.modal-backdrop').on('click', function() {
        return $('.modal').modal('hide');
      });
      return $.ajax({
        type: "GET",
        url: $(this).data('url'),
        beforeSend: function() {
          return modal.find('.modal-body.spinner').show();
        },
        complete: function() {
          return modal.find('.modal-body.spinner').hide();
        },
        success: function(res) {
          modal.find('.modal-body.content').html(res);
          if ($('#edit_form').length > 0) {
            $('#edit_form').setupMoneyInputForm();
            $('a#delete_money').attr('href', "/money/" + ($('#edit_money_id').val()) + "?money_mode=" + ($('#edit_money_mode').val()));
            $('#transfer_money').hide();
          }
          if ($('#edit-receipt-form.receipt-form').length > 0) {
            $('#edit-receipt-form.receipt-form').setupMoneyInputForm();
            $('#edit-receipt-form.receipt-form').setupReceiptForm();
            $('a#delete_money').attr('href', "/receipts/" + (modal.find('#receipt-items .id input:first').val()));
            $('#transfer_money').show();
            $('a#transfer_money').attr('href', "/receipts/" + (modal.find('#receipt-items .id input:first').val()) + "/transfer");
          }
          modal.find('.btn-input').off();
          modal.find('.btn-input').on('click', function() {
            $(this).next('.spinner').show();
            return modal.find('form').trigger('submit');
          });
          modal.modal('show').height(window.innerHeight * 0.8);
          if (window.navigator.userAgent.toLowerCase().indexOf('windows') !== -1) {
            return window.setTimeout(function() {
              return $('.ui-autocomplete.ui-menu').hide();
            }, 800);
          }
        },
        error: function() {
          return modal.find('.modal-body.content').html("申し訳ありません、何らかの理由で読み込めませんでした。少し時間を置いてもう一度お試しください。");
        }
      });
    };
    $.changeReadOnly = function() {
      if (window.innerWidth > 750) {
        $('.input_genre').prop('readonly', false);
        $('.input_date').prop('readonly', false);
        return $('.hasCalculator').prop('readonly', false);
      } else {
        $('.input_genre').attr('readonly', true);
        $('.input_date').attr('readonly', true);
        return $('.hasCalculator').attr('readonly', true);
      }
    };
    $.notifyMoneyUpdate = function(type) {
      if (type === 'money:update') {
        if ($('.notifications:visible').length === 0) {
          return $.notify('success', '更新しました');
        }
      } else if (type === 'money:delete') {
        if ($('.notifications:visible').length === 0) {
          return $.notify('success', '削除しました');
        }
      }
    };
    $.fn.extend({
      triggerMoneyEvent: function(name) {
        var event;
        event = $.Event('money:' + name);
        $(this).trigger(event);
        if (!event.isDefaultPrevented() && location.pathname !== "/home") {
          return window.location.reload();
        }
      },
      setupMoneyInputForm: function() {
        var form, input_date, submitSpinner;
        form = $(this).preventDoubleSubmit();
        if (form.length === 0) {
          return;
        }
        input_date = form.find('.input_date');
        input_date.datepicker({
          dateFormat: "yy年m月d日（D）",
          firstDay: 1,
          beforeShowDay: function(date) {
            switch (date.getDay()) {
              case 0:
                return [true, 'sunday'];
              case 6:
                return [true, 'saturday'];
              default:
                return [true];
            }
          }
        }).datepicker('setDate', $.parseDateJP(input_date.val())).on('focus', function() {
          return $(this).prop('selected', true);
        }).on('blur', function() {
          var day, diff, month, r, today, year;
          if (r = /^(?:((\d\d)(\d\d))|((\d\d?)\/(\d\d?)))$/.exec($(this).val())) {
            if (r[1]) {
              month = parseInt(r[2]) - 1;
              day = parseInt(r[3]);
            } else {
              month = parseInt(r[5]) - 1;
              day = parseInt(r[6]);
            }
            today = new Date();
            diff = ((month + 12) - today.getMonth()) % 12;
            year = diff <= 1 ? today.getFullYear() : today.getFullYear() - 1;
            return $(this).datepicker('setDate', new Date(year, month, day));
          }
        });
        form.find('.btn-calendar').on('click', function() {
          var date;
          date = $(this).prev('.input_date');
          if (date.datepicker('widget').is(':hidden')) {
            date.datepicker('show');
          } else {
            date.datepicker('hide');
          }
          return false;
        });
        form.find('.input_amount').calculator({
          showOn: 'opbutton',
          buttonImageOnly: false,
          showAnim: 'fadeIn',
          duration: 'fast',
          buttonImage: $('#common-img #calculator').data('path'),
          onOpen: function(value, inst) {
            return $('.calculator-trigger').addClass("btn-toggle");
          },
          onClose: function(value, inst) {
            return $('.calculator-trigger').removeClass("btn-toggle");
          }
        });
        form.find('.calculator-trigger').addClass('btn btn-default btn-flat btn-calculator');
        submitSpinner = form.find('.submit_spinner');
        $('.input_amount').on('click', function() {
          return $(this).calculator('hide');
        });
        if (form.find('input#edit_asset_flag').val() === '1') {
          form.find('button.calculator-trigger').hide();
        }
        form.on('ajax:send', function() {
          submitSpinner.show();
          return $(".modal-footer").find('.btn-input.btn-modal').prop('disabled', true);
        }).on('ajax:success', function() {
          $(form[0]).triggerMoneyEvent('update');
          return setTimeout(function() {
            return submitSpinner.hide();
          }, 1000);
        }).on('ajax:error', function(event, xhr) {
          var error, errors, name, ref, results;
          form.find('.control-set').removeClass('error');
          form.find('.text-danger').hide();
          $(".modal-footer .spinner").hide();
          $(".modal-footer").find('.btn-input.btn-modal').prop("disabled", false);
          submitSpinner.hide();
          if (xhr.status === 422) {
            errors = $.parseJSON(xhr.responseText);
            if ($.isEmptyObject(errors['errors'])) {
              form.find(".control-set.amount").addClass('error');
              return form.find(".amount_error").text('接続がタイムアウトしました').show();
            } else {
              ref = errors['errors'];
              results = [];
              for (name in ref) {
                error = ref[name];
                form.find(".control-set." + name).addClass('error');
                results.push(form.find("." + name + "_error").text(error).show());
              }
              return results;
            }
          }
        });
        form.find('.input_genre').genre_autocomplete({
          appendTo: form.find('.input_genre_menu'),
          openButton: form.find('.btn-genre'),
          valueField: form.find('.input_genre_id')
        });
        $(window).on('load resize', function() {
          return $.changeReadOnly();
        });
        return form.find('.input_place').place_autocomplete({
          appendTo: form.find('.input_place_menu'),
          minLength: 0,
          source: function(request, response) {
            var params;
            if (request.term.length > 0) {
              params = {
                term: request.term
              };
            } else {
              params = {
                genre_id: form.find('.input_genre_id').val()
              };
            }
            form.find('.input_place_spinner').show();
            return $.getJSON('/places', params, response).always(function() {
              return form.find('.input_place_spinner').hide();
            });
          },
          select: function(event, ui) {
            return form.find('.input_place_uid').val(ui.item.place_uid);
          }
        }).on('ready', function() {
          return $('.input_place_menu ul.ui-autocomplete').attr('tabindex', -1);
        }).on('change', function() {
          var matched_flag;
          matched_flag = false;
          form.find('.input_place_menu .place-name').each(function() {
            if ($(this).text() === form.find('.input_place').val()) {
              matched_flag = true;
              return false;
            }
          });
          if (matched_flag) {
            return;
          }
          return form.find('.input_place_uid').val('');
        }).on('focus', function() {
          if ($(this).val() === '') {
            return $(this).place_autocomplete('search', '');
          }
        });
      },
      setupReceiptForm: function() {
        var a, addRowIfMax, copyGenre, enableCalculatorIn, enableLocalGenreIn, firstInput, form, inFocus, inputAny, updateSum;
        form = $(this).preventDoubleSubmit();
        if (form.length === 0) {
          return;
        }
        enableLocalGenreIn = (function(_this) {
          return function(base) {
            base.find('.input_genre.local').genre_autocomplete({
              appendTo: $(_this).find('.input_genre_menu'),
              valueFieldSelector: '.input_genre_id.local',
              single: true
            });
            return $('.ui-autocomplete.ui-menu').hide();
          };
        })(this);
        enableLocalGenreIn(form);
        enableCalculatorIn = function(base) {
          return base.find('.input-amount-for-receipt:visible').not('.hasCalculator').calculator({
            showOn: 'focus',
            buttonImageOnly: false,
            showAnim: 'fadeIn',
            duration: 'fast'
          });
        };
        enableCalculatorIn(form);
        inputAny = false;
        firstInput = "";
        inFocus = function() {
          inputAny = false;
          return firstInput = form.find('.input_genre.global').val();
        };
        copyGenre = function() {
          if (firstInput !== form.find('.input_genre.global').val()) {
            inputAny = true;
          }
          if (inputAny) {
            return form.find('.input_genre.local').val(form.find('.input_genre.global').val());
          }
        };
        $('.input_genre.global').off('keydown');
        form.find('.input_genre.global').on('focus', function() {
          return inFocus();
        }).on('keyup', function() {
          return copyGenre();
        }).on('blur', function() {
          return copyGenre();
        });
        updateSum = function() {
          var elem, fields, isJpy, sum, sum100;
          fields = form.find('#receipt-items');
          isJpy = form.find('#receipt-items.jpy').length >= 1;
          if (isJpy) {
            sum = ((function() {
              var j, len, ref, results;
              ref = form.find('#receipt-items .amount input');
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                elem = ref[j];
                results.push(Math.round(parseFloat($(elem).val().replace(/,/g, '')) || 0));
              }
              return results;
            })()).reduce(function(a, b) {
              return a + b;
            });
            return form.find('#receipt-total-amount .val').html(sum);
          } else if (fields.length >= 1) {
            sum100 = ((function() {
              var j, len, ref, results;
              ref = form.find('#receipt-items .amount input');
              results = [];
              for (j = 0, len = ref.length; j < len; j++) {
                elem = ref[j];
                results.push(Math.round((parseFloat($(elem).val().replace(/,/g, '')) || 0) * 100));
              }
              return results;
            })()).reduce(function(a, b) {
              return a + b;
            });
            return form.find('#receipt-total-amount .val').html(sum100 / 100);
          }
        };
        addRowIfMax = function() {
          var elem, fields, newRow;
          fields = form.find('#receipt-items .amount input');
          if ((fields.length === 1 && fields[0].value !== "") || (((function() {
            var j, len, results;
            results = [];
            for (j = 0, len = fields.length; j < len; j++) {
              elem = fields[j];
              results.push(!!$(elem).val());
            }
            return results;
          })()).reduce(function(a, b) {
            return a & b;
          })) === 1) {
            form.find('#receipt-items .receipt-item-row:last').after(form.find('#blank-item-row').html());
            newRow = form.find('#receipt-items .receipt-item-row:last');
            if (!!form.find('.input_genre.global').val() && !!form.find('.input_genre_id.global').val()) {
              newRow.find('.input_genre.local').val(form.find('.input_genre.global').val());
              newRow.find('.input_genre_id.local').val(form.find('.input_genre_id.global').val());
            }
            enableLocalGenreIn(newRow);
            return enableCalculatorIn(newRow);
          }
        };
        form.find('#receipt-items').on('click', 'button.remove-row', function() {
          if (form.find('#receipt-items .receipt-item-row').length > 1) {
            $(this).closest('.receipt-item-row').remove();
            return updateSum();
          } else {
            return alert('品目をすべて削除する場合は「削除する」ボタンでレシート自体を削除してください');
          }
        });
        form.find('#receipt-items').on('change', '.amount input', function() {
          return updateSum() && addRowIfMax();
        }).on('keydown', '.amount input', function() {
          return updateSum() && addRowIfMax();
        }).on('keyup', '.amount input', function() {
          return updateSum() && addRowIfMax();
        }).on('blur', '.amount input', function() {
          return updateSum() && addRowIfMax();
        });
        a = function() {
          updateSum() && addRowIfMax();
        };
        setInterval(a, 1500);
        $.changeReadOnly();
        return form.find('#set-genre-global').on('click', function() {
          form.find('input.input_genre.global').show();
          form.find('input.input_genre.global').prop('disabled', false);
          form.find('button.btn-genre').prop('disabled', false);
          return form.find('input.input_genre.global').focus();
        });
      },
      togglePopoverReceipt: function(event) {
        var moneyId, tr;
        event.stopPropagation();
        tr = $(this).parent().parent();
        if ($(this).data('open')) {
          $(this).data('open', false);
          moneyId = $(this).data('money-id');
          return $(tr).parent().find('tr[data-parent-money-id="' + moneyId + '"]').remove();
        } else {
          $(this).data('open', true);
          return $(tr).after($(this).data('content'));
        }
      }
    });
    $(function() {
      var footerSpinner;
      footerSpinner = $('.modal_footer_spinner');
      $('#transfer_money').on('ajax:send', function() {
        return footerSpinner.show();
      }).on('ajax:success', function(event, response, status) {
        return $('#editModal').triggerMoneyEvent('update');
      }).on('ajax:error', function() {
        return footerSpinner.hide();
      });
      $('#delete_money').on('ajax:send', function() {
        return footerSpinner.show();
      }).on('ajax:success', function() {
        return $('#editModal').triggerMoneyEvent('delete');
      }).on('ajax:error', function() {
        return footerSpinner.hide();
      });
      $('#editModal').on('hide', function() {
        return $(this).find('a#delete_money').attr('href', 'javascript:void(0);');
      });
      $('#weeks_table').on('click', '.edit-money', $.modalEditMoney).on('click', '.new-money', function() {
        return $.modalNewMoney($(this).data('date'));
      }).on('click', '.popover-new-week', function(event) {
        return $(this).toggleSinglePopover(event, {
          placement: 'top'
        });
      }).on('click', '.popover-receipt', function(event) {
        return $(this).toggleSinglePopover(event, {
          placement: function(pop, e) {
            if ($(e).offset().left + 300 < window.innerWidth) {
              return "right";
            } else {
              return "left";
            }
          }
        });
      });
      $('.form-input.money-form').setupMoneyInputForm();
      return $('.receipt-form').setupReceiptForm();
    });
    return $(document).on('keyup', function(e) {
      if (e.keyCode === 27) {
        return $('input.hasCalculator:focus').calculator('hide');
      }
    });
  })();

}).call(this);
